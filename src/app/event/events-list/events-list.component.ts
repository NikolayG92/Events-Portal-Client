import { Component, Input, OnInit } from '@angular/core';


import { EventModel } from '../event-model';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
  events: EventModel[];
  constructor(private eventsService : EventsService) { }

  ngOnInit(): void {
    this.eventsService
          .getAll()
          .subscribe(events => {
              this.events = events;
          });
  }

}
