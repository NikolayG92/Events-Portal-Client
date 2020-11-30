import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from 'src/app/event/event-model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-events-by-category',
  templateUrl: './events-by-category.component.html',
  styleUrls: ['./events-by-category.component.css']
})
export class EventsByCategoryComponent implements OnInit {
  
  events: EventModel[];
  constructor(private route: ActivatedRoute,
    private categoryService : CategoryService) { }

  ngOnInit(): void {
     
    this.route.params.subscribe(params => {
      const id = params['id'];
      
        this.categoryService.getById(id)
        .subscribe(data => {
          this.events = data.events;
          console.log(this.events);
        })
      })

    }
}
