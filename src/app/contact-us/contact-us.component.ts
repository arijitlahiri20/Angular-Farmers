import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  email: string;
  contactnumber: number;
  message: string;

  contact: any = {
    email:"demo@gmail.com",
    contact_no:911,
    message: "Issues with signup"
  }
  constructor(private userServie : UserService, private router : Router) { }

  ngOnInit() {

  }

  submitForm(){
    this.contact.email = this.email;
    this.contact.contact_no = this.contactnumber;
    this.contact.message = this.message;

    this.userServie.sendContactUs(this.contact).subscribe(data =>{
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        alert(data.message);
      }
      else{
        alert("Error sending data! Try Again");
      }
      this.email = null;
      this.contactnumber = null;
      this.message = null;
    })
  }

}
