import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../core/guards/auth.guard';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';


const routes: Routes = [
    {
        path: "events",
        canActivateChild: [
            AuthGuard
        ],
        children: [
            {
                path: "create",
                component: EventAddComponent,
                data: {
                    isLogged: true,
                    title: "Create Event"
                }
            },
            {
                path: ":id",
                component: EventDetailsComponent,
                data: {
                    isLogged: true
                }
            }
           
        ]
    }
]


export const EventRoutingModule = RouterModule.forChild(routes);