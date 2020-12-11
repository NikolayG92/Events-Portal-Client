import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserModel } from 'src/app/user/user-model';
import { UserService } from 'src/app/user/user.service';
import { EventModel } from '../event-model';
import { EventTicketsModel } from '../event-tickets-model';
import { EventsService } from '../event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: EventModel;
  @Input() events: EventTicketsModel[];
  boughtTickets: number;
  currentUser: UserModel;

  constructor(private eventService: EventsService,
    private userService: UserService) { }

  ngOnInit(): void {

    this.boughtTickets = 0;
    this.currentUser = this.userService.currentUser;


    this.eventService.getEventsWithBoughtTicketsByUser()
    .subscribe((events) => this.events = events);
    
    this.event.users.forEach(user => {
      if(this.currentUser.id === user.user.id){
        console.log(user.boughtTickets);
        this.boughtTickets = user.boughtTickets;
      }
    }
    )
  }



}
