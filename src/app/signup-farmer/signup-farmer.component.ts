import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-farmer',
  templateUrl: './signup-farmer.component.html',
  styleUrls: ['./signup-farmer.component.css']
})
export class SignupFarmerComponent implements OnInit {

  user = new User();
  message: string;

  constructor(private service:UserService,private router: Router) { }

  ngOnInit() {
  }

  SignupfarmerCheck(){

    this.user.status="PENDING";
    this.user.user_type="FARMER";
    console.log(this.user);

    this.service.signupfarmer(this.user).subscribe(data=>{
        
        //this.message=data.message;
        alert(JSON.stringify(data));
  })
}


}
