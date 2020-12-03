import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {


  
  isLogged = false;

  constructor(private userService: UserService) { }
  
  
  ngDoCheck(): void {
    this.isLogged = this.userService.isLogged;
  }

  ngOnInit(): void {
  }

}
