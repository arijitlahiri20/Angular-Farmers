import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-bidder-home-page',
  templateUrl: './bidder-home-page.component.html',
  styleUrls: ['./bidder-home-page.component.css']
})
export class BidderHomePageComponent implements OnInit {
  user:User;
  username: string;
  constructor() { }

  ngOnInit() : void{
    // localStorage.setItem('userid', JSON.stringify(this.user.user_id));
   // this.username=sessionStorage.getItem('userid');
  }

}
