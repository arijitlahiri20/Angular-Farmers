import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login: Login = new Login();
  message: string;

  constructor() { }

  ngOnInit() {
  }

  // loginCheck() {
  //   console.log(this.login);
  //   this.userService.login(this.login).subscribe(response => {
  //     alert(JSON.stringify(response));
  //     console.log(response);
  //     if(response.status == 'SUCCESS') {
  //       let userId = response.userId;
  //       let userName = response.userName;
  //       sessionStorage.setItem('userId', String(userId));
  //       sessionStorage.setItem('userName', userName);
  //       this.router.navigate(['farmer-home']);
  //     }
  //     else
  //       this.message = response.message;
  //   })
  // }
  
}
