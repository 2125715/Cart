import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  username = '';
  password = '';

  @ViewChild('loginForm', { static: false }) loginForm: NgForm | undefined;
  Message: string = '';

  constructor( private router: Router,private api:ApiService) { }

  ngOnInit(): void {
  }
  login() {
    this.api.login(this.username, this.password).subscribe(
      (res) => {
        this.Message="Successfully verfied";
        this.router.navigate(['/products']);
      },
      (err) => {
        this.Message="Login failed";
      }
    );
    // if(loginSuccessfull){
      
    // }
  }

}
