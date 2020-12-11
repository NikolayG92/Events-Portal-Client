import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from 'src/app/event/event-model';
import { EventTicketsModel } from 'src/app/event/event-tickets-model';
import { EventsService } from 'src/app/event/event.service';
import { UserModel } from 'src/app/user/user-model';
import { UserService } from 'src/app/user/user.service';
import { CategoryModel } from '../category-model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-events-by-category',
  templateUrl: './events-by-category.component.html',
  styleUrls: ['./events-by-category.component.css']
})
export class EventsByCategoryComponent implements OnInit {

  event: EventModel;
  categories: CategoryModel[];
  events: EventModel[];
  currentUser: UserModel;
  boughtTickets: number;

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private userService: UserService,
    private eventService: EventsService) { }

  ngOnInit(): void {

    this.currentUser = this.userService.currentUser;
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.categoryService.getById(id)
        .subscribe(data => {
        this.events = data.events;
        
    });
  });
    this.categoryService
      .getAll()
      .subscribe(categories => {
        this.categories = categories;
      });


  }

}
