import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../core/guards/auth.guard';
import { EventsListComponent } from '../event/events-list/events-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EventsByCategoryComponent } from './events-by-category/events-by-category.component';

const routes: Routes = [
    {
        path: "categories",
        canActivateChild: [
            AuthGuard
        ],
        children: [
            {
                path: "create",
                component: CategoryAddComponent,
                data: 
                 {  isLogged: true,
                    title: "Create Category"
                    }
                
            },
            {
                path: ":id",
                component: EventsByCategoryComponent,
                data: {
                    isLogged: true
                }
            }
        ]
    }
]

export const CategoryRoutingModule = RouterModule.forChild(routes);