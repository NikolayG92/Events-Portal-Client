import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAddComponent } from './event-add/event-add.component';
import { RouterModule } from '@angular/router';
import { EventRoutingModule } from './event-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './event/event.component';
import { EventsService } from './event.service';
import { EventDetailsComponent } from './event-details/event-details.component';





@NgModule({
  declarations: [
    EventAddComponent,
    EventsListComponent,
    EventComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EventRoutingModule
  ],
  exports: [
    EventAddComponent,
    EventComponent,
    EventsListComponent,
    EventDetailsComponent
  ],
  providers: [
    EventsService
  ]
})
export class EventModule { }
