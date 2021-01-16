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
    //  alert(JSON.stringify(response));
      this.router.navigate(['/login']);
    })

  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
