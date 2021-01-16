import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-bidder-home-page',
  templateUrl: './bidder-home-page.component.html',
  styleUrls: ['./bidder-home-page.component.css']
})
export class BidderHomePageComponent implements OnInit {
  username = sessionStorage.getItem('full_name');
  constructor(private router : Router) { }

  ngOnInit() : void{
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  market(){
    this.router.navigate(['/bidder-marketplace']);
  }

  history(){
    this.router.navigate(['/bidder-bidhistory']);
  }
}
