import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../core/guards/auth.guard';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailsComponent } from './event-details/event-details.component';


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
                    title: "Create Event"
                }
            },
            {
                path: ":id",
                component: EventDetailsComponent
            }
           
        ]
    }
]


export const EventRoutingModule = RouterModule.forChild(routes);