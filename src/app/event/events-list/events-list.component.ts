import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/user/user-model';
import { UserService } from 'src/app/user/user.service';


import { EventModel } from '../event-model';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements AfterViewInit {
  
  events: EventModel[];
  currentUser: UserModel;
  constructor(private eventsService : EventsService,
    private userService: UserService) { }

  ngAfterViewInit(): void {
    this.eventsService
          .getAll()
          .subscribe(events => {
              this.events = events;
          });

          this.userService.getCurrentUserProfile()
          .subscribe((user) =>{
            if(user != null){
              this.currentUser = user
            }
           ;
          } 
          )   
  }


}
