import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login: Login = new Login();
  message: string;

  constructor(private service:UserService,private router: Router, private formBuilder: FormBuilder) { }

  loginform: FormGroup;
  submitted = false;
  email: string;

  ngOnInit() {
    this.loginform = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.loginform.controls; }

  loginCheck() {
    //console.log("Logged in successfully")
    this.submitted = true;
    if (this.loginform.invalid) {
      return;
  }


    this.service.login(this.login).subscribe(data=>{
      // alert(JSON.stringify(data));
   
       if(data.status=="SUCCESS"){
         //console.log(data.message);
         sessionStorage.setItem('user_id',data.userid);
         sessionStorage.setItem('full_name',data.userName);
         sessionStorage.setItem('user_type',data.userType);
         sessionStorage.setItem('email', data.userEmail);
  
         this.message=data.message;

         if(data.userType=='BIDDER'){
        
         this.router.navigate(['/bidder-home']);
   
          }
       else if(data.userType=='ADMIN'){
         
         this.router.navigate(['/admin-home']);
         
          }
          else if(data.userType=='FARMER'){
           
             this.router.navigate(['/farmer-home']); 
            
          }
          else{
            alert("Not a Valid response");
          }
       }
       else{
         this.message=data.message;
       }
     })
  }
  
}
