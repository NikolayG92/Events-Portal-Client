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

    constructor(private http: HttpClient,
        private userService: UserService) {


    }

    getAll(): Observable<EventModel[]> {
        return this.http.get<EventModel[]>(`${this.apiUrl}/all`);
    }

    getById(id: string): Observable<EventModel> {
        return this.http.get<EventModel>(`${this.apiUrl}/${id}`);
    }


    addEvent(eventData: FormData) {
        return this.http.post<EventModel>(`${this.apiUrl}/create`, eventData);
    }

    delete(id: string) {
        return this.http.delete<EventModel>(`${this.apiUrl}/delete/${id}`);
    }

    edit(eventData: EventModel) {
        return this.http.put<EventModel>(`${this.apiUrl}/${eventData.id}`, eventData);
    }


    buyTickets(id: string, eventModel: EventModel) {
        return this.http.post(`${this.apiUrl}/buyTickets/${id}`, eventModel);
    }

    getAllByUser(): Observable<EventModel[]> {
        return this.http.get<EventModel[]>(`${this.apiUrl}/getEventsByUser`);
    }


}