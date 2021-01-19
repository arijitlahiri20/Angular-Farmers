import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service: UserService, private router: Router, private formBuilder: FormBuilder) { }

  forgotpassword: FormGroup;
  submitted = false;

  email: string;

  user: any = {
    email: ""
  };

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.forgotpassword = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    
    });
  }
  get f() { return this.forgotpassword.controls; }

  getNewPassword() {
    this.submitted = true;
    if (this.forgotpassword.invalid) {
      return;
  }

    this.user.email = this.email;
    this.service.getNewPassword(this.user).subscribe(response => {
    console.log(JSON.stringify(response));
    if(response.status=='SUCCESS'){
      alert("Password has been sent to the registered Email Id!");
      this.router.navigate(['/login']);
    }
    else{
      alert("Email Id not registered. Please Sign Up First");
    }
    })

  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
