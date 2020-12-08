import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage = '';
 
  constructor( 
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: { username: string, email: string, 
    password: string, confirmPassword: string }): void {
    this.errorMessage = '';
    if(formValue.password !== formValue.confirmPassword){
       this.errorMessage = 'Passwords do not match!';
       console.log(this.errorMessage);
    }
    this.userService.register(formValue).subscribe({
      next: () => {

        this.router.navigate(['/user/login']);
      },
      error: () => {
        this.errorMessage = 'ERROR!';

      }
    });


}
}
