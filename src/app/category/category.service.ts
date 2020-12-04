import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { UserService } from '../user/user.service';
import { CategoryModel } from './category-model';




@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    collection: any;

    apiUrl = `${environment.apiUrl}/categories`
    
    currentUser = this.userService.currentUser;


    constructor(private http : HttpClient,
        private userService: UserService) { 
            
        
         }
  
    getAll() : Observable<CategoryModel[]> {
    
        return this.http.get<CategoryModel[]>(`${this.apiUrl}/all`);
    }
    
    getById(id : string) : Observable<CategoryModel> {
        return this.http.get<CategoryModel>(`${this.apiUrl}/${id}`);
    }

    createCategory(categoryData : CategoryModel) {
      
        return this.http.post<CategoryModel>(`${this.apiUrl}/create`, categoryData);
    }

}