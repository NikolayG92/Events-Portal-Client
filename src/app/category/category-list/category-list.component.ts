import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from '../category-model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: CategoryModel[];

  constructor(private categoryService: CategoryService) { 
  
  }

  ngOnInit(): void {
    this.categoryService
    .getAll()
    .subscribe(categories => {
        this.categories = categories;
       
    });
   
  }

 
  
 

}
