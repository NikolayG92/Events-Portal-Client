import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserModel } from './user-model';



@Injectable()
export class UserService {

  apiUrl = environment.apiUrl + "/users"; 
  currentUser: any | null;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(private http: HttpClient) {  
  }

  

  login(user: { username: string, password: string }) {
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa(user.username + ':' +  user.password)});
    return this.http.post(`${this.apiUrl}/login`, user, {headers}).pipe(
     tap(
      
       userData => {
        
        sessionStorage.setItem('username', user.username);
     
        this.currentUser = userData;
        return userData;
       }
      
     )
    
    );    
  }


  
  register(user: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap((user: UserModel) => this.currentUser = user)
    );
  }


  logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => this.currentUser = null)
    );
  }
  
  
  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`, { withCredentials: true }).pipe(
      tap(((user: UserModel) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return of(null); })
    );
  }

}