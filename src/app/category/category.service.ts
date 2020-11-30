import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { CategoryModel } from './category-model';




@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    collection: any;

    apiUrl = `${environment.apiUrl}/categories`

    constructor(private http : HttpClient) { 
            
        
         }
  
    getAll() : Observable<CategoryModel[]> {
        return this.http.get<CategoryModel[]>(`${this.apiUrl}/all`);
    }
    
    getById(id : string) : Observable<CategoryModel> {
        return this.http.get<CategoryModel>(`${this.apiUrl}/${id}`);
    }

}