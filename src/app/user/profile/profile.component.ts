import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  @Input() user: UserModel;

  
  apiUrl = `${environment.apiUrl}/users/profile`

  constructor(private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.getCurrentUserProfile()
      .subscribe(data => {
        this.user = data;

      
      })
    })
  }

}
