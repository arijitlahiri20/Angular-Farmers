import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-bidder',
  templateUrl: './signup-bidder.component.html',
  styleUrls: ['./signup-bidder.component.css']
})
export class SignupBidderComponent implements OnInit {

  user = new User();
  form2 : FormGroup;


  constructor(private service:UserService,private router: Router) { }

  ngOnInit() {

      this.form2=new FormGroup({
      full_name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      email: new FormControl('',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      contact_no: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}')]),
      addr_1: new FormControl('',[Validators.required]),
      addr_2: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      state:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      pincode:new FormControl('',[Validators.required, Validators.pattern('[0-9]{6}')]),
      land_pincode:new FormControl('',[Validators.required, Validators.pattern('[0-9]{6}')]),
      land_addr:new FormControl('',[Validators.required]),
      land_area:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      account_no:new FormControl('',[Validators.required, Validators.pattern('[0-9]{13}')]),
      ifsc_no:new FormControl('',[Validators.required, Validators.pattern('[0-9]{6}')]),


    })
  }


  signupbidder(){

    this.user.status="PENDING";
    this.user.user_type="BIDDER";
    localStorage.setItem('usertype',this.user.user_type);
    
  console.log(this.user);

    this.service.signupfarmer(this.user).subscribe(data=>{
        
        //this.message=data.message;
        alert(JSON.stringify(data));
        if(data.status=="SUCCESS"){
          localStorage.setItem('user_id',data.registeredCustomerId);
          this.router.navigate(['/signup-documents']);
        }
  })
}

}
