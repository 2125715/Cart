import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  username = '';
  password = '';

  @ViewChild('registrationForm', { static: true })
  registrationForm!: NgForm;
  usernameTaken = false;
  message = '';

  constructor( private router: Router, private api: ApiService) { }


  ngOnInit(): void {
  }
  register() {


    if (this.registrationForm.valid) {

      this.api.register(this.username, this.email, this.password).subscribe(

        (res) => {
          this.checkUsernameAvailability();
          this.message = "Registration success";
          this.router.navigate(['/login']);
        },
        (err) => {
          this.message = "Registration failed";
          this.usernameTaken = true;
        }
      );

    }
  }
  checkUsernameAvailability(): void {
    if (this.username) {
      this.api.checkUsernameAvailability(this.username).subscribe(
        (isTaken) => {
          this.usernameTaken = isTaken;

        },
        (err) => {
          console.error('Error checking user availability', err);
        }
      );
    }
  }
}
