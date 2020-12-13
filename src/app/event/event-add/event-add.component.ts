import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/category/category-model';
import { CategoryService } from 'src/app/category/category.service';
import { EventModel } from '../event-model';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  errorMessageStartDate = '';
  errorMessage = '';
  noImage = '';
  ticketsMinError = '';
  @Input() categories: CategoryModel[];
  @Input() event: EventModel;
  startDate = new Date();

  selectedImage: File;

  imageUrl: any;

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



  submitFormHandler(event: EventModel): void {
   this.noImage = '';
   this.errorMessageStartDate = '';
   this.ticketsMinError = '';

    event.startDate = this.startDate;

    const formData = new FormData;
    if(event.ticketsAvailable < 10){
      this.ticketsMinError = 'Tickets must be at least 10!';
    }
    if(this.selectedImage === undefined){
      this.noImage = 'Please select image!';
    }else {
      formData.append('file', this.selectedImage, this.selectedImage.name);
    }
   

    formData.append('event', new Blob([JSON.stringify(event)], {
      type: "application/json"
    }));

    let currentDate = new Date();

   if(event.startDate < currentDate){
     this.errorMessageStartDate = "Date cannot be in the past!";
   }else {
    this.eventService.addEvent(formData).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'ERROR!';
      }
    });
   }
   
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      this.startDate = new Date(dateString);
    }
    return this.startDate;

  }

  onImageSelected(event) {
    this.selectedImage = <File>event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = (_event) => {
      this.imageUrl = reader.result;
    }
  }


}
