import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/event/event-model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {


  isLoading = false;
  errorMessage = '';

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: {id: string,
    name: string;
    events: EventModel[];
    imageUrl: string;
    
  }): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.categoryService.createCategory(formValue).subscribe({
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
