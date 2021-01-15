import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:string;

  constructor(private service:UserService, private router: Router) { }

  ngOnInit() {
  }

  getNewPassword(){
    this.service.getNewPassword(this.email).subscribe(response => {
      alert(JSON.stringify(response));
      this.router.navigate(['/login']);
    })

  }

  backToLogin(){
    this.router.navigate(['/login']);
  }
}
