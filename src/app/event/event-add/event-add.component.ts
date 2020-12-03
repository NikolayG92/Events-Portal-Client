import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/category/category-model';
import { CategoryService } from 'src/app/category/category.service';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  isLoading = false;
  errorMessage = '';
  @Input() categories: CategoryModel[];

  constructor(private eventService: EventsService,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    
    this.categoryService
       .getAll()
       .subscribe(categories => {
           this.categories = categories;
          
       });
  }

  submitFormHandler(formValue: {id: string,
    title: string;
    ticketsAvailable: number;
    description: string;
    startedOn: Date;
    imageUrl: string;
    name: string;
  }): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.eventService.addEvent(formValue).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = 'ERROR!';
        this.isLoading = false;
      }
    });
  }
}
