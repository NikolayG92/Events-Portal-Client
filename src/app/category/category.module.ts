import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from './category-add/category-add.component';
import { RouterModule } from '@angular/router';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { EventsByCategoryComponent } from './events-by-category/events-by-category.component';
import { EventModule } from '../event/event.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryAddComponent,
    CategoryListComponent,
    CategoryComponent,
    EventsByCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CategoryRoutingModule,
    EventModule,
    FormsModule
  ],
  exports: [
    CategoryAddComponent,
    CategoryListComponent,
    CategoryComponent,
    EventsByCategoryComponent
  ]
})
export class CategoryModule { }
