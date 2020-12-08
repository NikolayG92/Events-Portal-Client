import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { EventsUserComponent } from '../event/events-user/events-user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'user',
    canActivateChild: [
      AuthGuard
    ],
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          isLogged: false,
          noNavigation: true,
          title: 'REGISTER USER'
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          isLogged: false,
          title: 'USER LOGIN'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'edit',
        component: UserEditComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'events',
        component: EventsUserComponent,
        data: {
          isLogged: true
        }
      }
      
    ]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
