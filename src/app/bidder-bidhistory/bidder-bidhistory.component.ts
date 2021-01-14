import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { BidderService } from '../services/bidder.service';

@Component({
  selector: 'app-bidder-bidhistory',
  templateUrl: './bidder-bidhistory.component.html',
  styleUrls: ['./bidder-bidhistory.component.css']
})
export class BidderBidhistoryComponent implements OnInit {

  bidhistory: any=[];

  user: User = new User();

  constructor(private service:BidderService, private router:Router) { }

  ngOnInit() {
    this.loadhistory();
  }

  loadhistory(){

    this.user.user_id=22;
    
    this.service.bidhistory(this.user).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.bidhistory=data.list;

    })
  }

}
