import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from 'src/app/event/event-model';
import { CategoryModel } from '../category-model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: CategoryModel;
  categories: CategoryModel[];
  events: EventModel[];

  constructor(private route: ActivatedRoute,
     private categoryService: CategoryService ) {}

  ngOnInit(): void {

     this.route.params.subscribe(params => {
      const id = params['id'];
      this.categoryService.getById(id)
      .subscribe(data => {
        this.category = data;
      
      })

      this.categoryService
      .getAll()
      .subscribe(categories => {
          this.categories = categories;
         
      });
  })
  }
  
}