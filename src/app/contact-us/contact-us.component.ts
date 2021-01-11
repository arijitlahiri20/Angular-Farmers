import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  email: string;
  contactnumber: number;
  message: string;
  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.email);
    console.log(this.contactnumber);
    console.log(this.message);
  }

}
