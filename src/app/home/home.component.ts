import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {

  isLogged = false;

  url: string;
  constructor(private userService: UserService,
    router: Router
  ) { }


  
  ngDoCheck(): void {
    this.isLogged = this.userService.isLogged;
  }

}
