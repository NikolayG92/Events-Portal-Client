import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { environment } from '../../../environments/environment';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() user: UserModel;

  errorMessage = '';

  apiUrl = `${environment.apiUrl}/users/edit`

  
  selectedImage: File;

  imageUrl: any;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.getCurrentUserProfile()
      .subscribe(data => {
        this.user = data;

      
      })
    })
  }
  
  submitFormHandler(formValue:{
     oldPassword: string,
     newPassword: string, 
     confirmPassword: string
    }): void {
    this.errorMessage = '';
        if(formValue.newPassword !== formValue.confirmPassword){
      this.errorMessage = 'Passwords do not match!';
   }
    const formData = new FormData;
    formData.append('file', this.selectedImage, this.selectedImage.name);
    formData.append('user', new Blob([JSON.stringify(formValue)], {
                type: "application/json"
            }));

    this.userService.edit(formData).subscribe({
      next: () => {
        this.router.navigate(['/user/profile']);
      },
      error: () => {
        this.errorMessage = 'Wrong credentials!';
      }
    });
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
