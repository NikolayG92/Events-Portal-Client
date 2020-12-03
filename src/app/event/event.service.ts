import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { UserService } from '../user/user.service';
import { EventModel } from './event-model';



@Injectable({
    providedIn: 'root'
})
export class EventsService {

    collection: any;

    apiUrl = `${environment.apiUrl}/events`;

    currentUser = this.userService.currentUser;

    constructor(private http : HttpClient,
        private userService: UserService) { 
            
        
         }
  
    getAll() : Observable<EventModel[]> {
        console.log(this.currentUser);
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa
        (this.currentUser.username + ':' + this.currentUser.password) });
        return this.http.get<EventModel[]>(`${this.apiUrl}/all`, {headers});
       
    }
    
    getById(id : string) : Observable<EventModel> {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa
        (this.currentUser.username + ':' + this.currentUser.password) });
        return this.http.get<EventModel>(`${this.apiUrl}/${id}`, {headers});
    }

    
    addEvent(eventData : EventModel) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa
        (this.currentUser.username + ':' + this.currentUser.password) });
        return this.http.post<EventModel>(`${this.apiUrl}/create`, eventData, {headers});
    }
    
    delete(id : string) {
        return this.http.delete<EventModel>(`${this.apiUrl}/${id}`);
    }
    
    edit(eventData : EventModel) {
        return this.http.put<EventModel>(`${this.apiUrl}/${eventData.id}`, eventData);
    }

    
    buyTickets(id : string, eventModel : EventModel) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa
        (this.currentUser.username + ':' + this.currentUser.password) });
    return this.http.post(`${this.apiUrl}/buyTickets/${id}`, eventModel, {headers});
    
}
}