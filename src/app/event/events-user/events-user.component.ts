import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/user/user-model';
import { UserService } from 'src/app/user/user.service';
import { EventModel } from '../event-model';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-events-user',
  templateUrl: './events-user.component.html',
  styleUrls: ['./events-user.component.css']
})
export class EventsUserComponent implements OnInit {

  events: EventModel[];
  currentUser: UserModel;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService
      .getAllByUser()
      .subscribe(events => {
        this.events = events;
      });
  }

}
