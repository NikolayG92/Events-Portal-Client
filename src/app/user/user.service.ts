import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tokens } from './tokens';
import { UserModel } from './user-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl + "/users"; 
  currentUser: any | null;

  private loggedUser: string;

  private readonly JWT_TOKEN = 'JWT_TOKEN';
 

  isLoggedIn$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {  
    this.isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());
  }

  

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, user)
      .pipe(
        tap(token => this.doLoginUser(user.username, token))
        );
  }
  
  register(user: { username: string, email: string, password: string }): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  edit(user: {username: string, email: string, oldPassword: string, newPassword: string,
     confirmPassword: string,
     imageUrl: string}): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/edit`, user);
  }


  logout() {
    this.doLogoutUser();
  }
  
  getCurrentUserProfile(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/profile`).pipe(
      tap(((user: UserModel) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return of(null); })
    );
  }



  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.isLoggedIn$.next(true);
    this.loggedUser = username;
    this.storeTokens(tokens);
    this.getCurrentUserProfile();
  }

  private doLogoutUser() {
    this.isLoggedIn$.next(false);
    this.loggedUser = null;
    this.removeTokens();
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
