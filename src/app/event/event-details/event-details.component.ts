import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventModel } from '../event-model';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  
  @Input() event: EventModel;

  
  apiUrl = `${environment.apiUrl}/events`

  constructor(private route: ActivatedRoute,
    private eventService: EventsService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.eventService.getById(id)
      .subscribe(data => {
        this.event = data;

      
      })
    })
  }

  buyTickets(formValue: {tickets: number}, id: string) {
    this.event.ticketsAvailable = this.event.ticketsAvailable - formValue.tickets;
    this.event.boughtTickets = formValue.tickets;
    this.eventService.buyTickets(id, this.event).subscribe();
    this.router.navigate(['/user/events']);
  }

  deleteEvent(id: string) {
    this.eventService.delete(id).subscribe();
    this.router.navigate(['/']);
  }
     
}


