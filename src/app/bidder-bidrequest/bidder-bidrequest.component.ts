import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bids } from '../models/bids.model';
import { BidderService } from '../services/bidder.service';

@Component({
  selector: 'app-bidder-bidrequest',
  templateUrl: './bidder-bidrequest.component.html',
  styleUrls: ['./bidder-bidrequest.component.css']
})
export class BidderBidrequestComponent implements OnInit {

  bid: Bids = new Bids();
  sell_id:any;
  Bids:any=[];

  sells: any={
   sell_id:0
  };

  constructor(private service: BidderService, private router: Router) { }

  ngOnInit() :void {
    this.sell_id = localStorage.getItem('sell_id');
    this.loadBid();
  }

  placebid() {


    this.bid.user_id=JSON.parse(sessionStorage.getItem('user_id'));
    this.bid.sell_id=JSON.parse(this.sell_id);
   // this.bid.user_id=JSON.parse(localStorage.getItem('userid'));
   // this.bid.user_id=sessionStorage.getItem('user_id');
    console.log(JSON.stringify(this.bid));

    this.service.placebid(this.bid).subscribe(response => {
      alert(JSON.stringify(response));
      this.router.navigate(['/bidder-marketplace']);
    })

  }

  loadBid(){
    this.sells.sell_id=localStorage.getItem('sell_id');
    this.service.getTopBid(this.sells).subscribe(response =>{
      console.log(JSON.stringify(response.list));
      this.Bids = response.list;
    })
    
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
