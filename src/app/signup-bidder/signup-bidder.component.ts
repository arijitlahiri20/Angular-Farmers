import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-bidder',
  templateUrl: './signup-bidder.component.html',
  styleUrls: ['./signup-bidder.component.css']
})
export class SignupBidderComponent implements OnInit {

  user = new User();

  constructor(private service:UserService,private router: Router) { }

  ngOnInit() {
  }
  signupbidder(){

    this.user.status="PENDING";
    this.user.user_type="BIDDER";
  console.log(this.user);

    this.service.signupfarmer(this.user).subscribe(data=>{
        
        //this.message=data.message;
        alert(JSON.stringify(data));
        if(data.status=="SUCCESS")
          this.router.navigate(['/']);
  })
}

}
