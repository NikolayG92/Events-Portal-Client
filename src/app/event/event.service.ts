import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { EventModel } from './event-model';



@Injectable({
    providedIn: 'root'
})
export class EventsService {

    collection: any;

    apiUrl = `${environment.apiUrl}/events`

    constructor(private http : HttpClient) { 
            
        
         }
  
    getAll() : Observable<EventModel[]> {
        return this.http.get<EventModel[]>(`${this.apiUrl}/all`);
    }
    
    getById(id : string) : Observable<EventModel> {
        return this.http.get<EventModel>(`${this.apiUrl}/${id}`);
    }

    
    addEvent(eventData : EventModel) {
        return this.http.post<EventModel>(`${this.apiUrl}`, eventData);
    }
    
    delete(id : string) {
        return this.http.delete<EventModel>(`${this.apiUrl}/${id}`);
    }
    
    edit(eventData : EventModel) {
        return this.http.put<EventModel>(`${this.apiUrl}/${eventData.id}`, eventData);
    }

    
    buyTickets(id : string, eventModel : EventModel) {
    return this.http.post(`${this.apiUrl}/buyTickets/${id}`, eventModel);
    
}
}