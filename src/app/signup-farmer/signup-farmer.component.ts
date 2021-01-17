import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
//import { FormGroup, FormControl , Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must.match';


@Component({
  selector: 'app-signup-farmer',
  templateUrl: './signup-farmer.component.html',
  styleUrls: ['./signup-farmer.component.css']
})
export class SignupFarmerComponent implements OnInit {

  user = new User();
  form2: FormGroup;
  message: string;
  submitted = false;
  confirmpassword: string;

  constructor(private service: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form2 = this.formBuilder.group({
      full_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ][a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      contact_no: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      addr_1: ['', [Validators.required]],
      addr_2: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      pincode: ['', [Validators.required]],
      land_pincode: ['', [Validators.required]],
      land_addr: ['', [Validators.required]],
      land_area: ['', [Validators.required]],
      account_no: ['', [Validators.required]],
      ifsc_no: ['', [Validators.required]],
      password1: ['', [Validators.required]],
      password2: ['', [Validators.required]]
      // }, { 
      //   validator: MustMatch('password1', 'password2')
    })
  }
  get f() { return this.form2.controls; }



  SignupfarmerCheck() {

    console.log(this.user.password);
    console.log(this.confirmpassword);
    this.submitted = true;
    if (this.user.password != this.confirmpassword) {
      alert("Passwords don't match!");
    }
    else if (this.form2.invalid) {
      return;
    }
    else {

      this.user.status = "PENDING";
      this.user.user_type = "FARMER";
      localStorage.setItem('usertype', this.user.user_type);
      console.log(this.user);

      this.service.signupfarmer(this.user).subscribe(data => {

        //this.message=data.message;
        alert(JSON.stringify(data));
        if (data.status == "SUCCESS") {
          localStorage.setItem('user_id', data.registeredCustomerId);
          this.router.navigate(['/signup-documents']);
        }
      })
    }


  }


}
