import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login: Login = new Login();
  message: string;

  constructor(private service:UserService,private router: Router) { }

  ngOnInit() {
  }

  loginCheck() {
    console.log("Logged in successfully")
    // console.log(this.login);
    // this.userService.login(this.login).subscribe(response => {
    //   alert(JSON.stringify(response));
    //   console.log(response);
    //   if(response.status == 'SUCCESS') {
    //     let userId = response.userId;
    //     let userName = response.userName;
    //     sessionStorage.setItem('userId', String(userId));
    //     sessionStorage.setItem('userName', userName);
    //     this.router.navigate(['/farmer-home']);
    //   }
    //   else
    //     this.message = response.message;
    // })

    this.service.userLogin(this.login).subscribe(data=>{
      // alert(JSON.stringify(data));
   
       if(data.status=="SUCCESS"){
         //console.log(data.message);
         sessionStorage.setItem('UserId',String(data.user_id));
         sessionStorage.setItem('name',String(data.full_name));
         sessionStorage.setItem('userRole',String(data.user_type));
  
         this.message=data.message;
         //alert(data.role);          //farmer/bidder/admin
         if(data.user_type=='BIDDER'){
        alert("Welcome Bidder");
         this.router.navigate(['/bidder-home']);
   
          }
       else if(data.user_type=='ADMIN'){
         alert("Welcome Admin");
         this.router.navigate(['/admin-home']);
         
          }
          else if(data.user_type=='FARMER'){
           alert("Welcome Farmer");
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
