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

  events: EventModel[];

  constructor( ) {}

  ngOnInit(): void {
    


  }


  
}