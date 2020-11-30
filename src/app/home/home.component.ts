import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {

  isLogged = false;

  url: string;
  constructor(
    router: Router
  ) { }

  ngDoCheck(): void {
  }

}
