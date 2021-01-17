import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  sell_id: any;
  Bids: any = [];
  msp: any ;
  sells: any = {
    sell_id: 0
  };

  bids: any={
    sell_id:0,
    user_id:0
  };
  activeBids: any=[];

  constructor(private service: BidderService, private router: Router,private formBuilder: FormBuilder) { }
  
  
  ngOnInit(): void {
    this.sell_id = localStorage.getItem('sell_id');
    this.msp = localStorage.getItem('msp');
    this.loadBid();

  }
  


  placebid() {

    if (this.msp <= this.bid.bid_amount) {

      this.bid.user_id = JSON.parse(sessionStorage.getItem('user_id'));
      this.bid.sell_id = JSON.parse(this.sell_id);
      // this.bid.user_id=JSON.parse(localStorage.getItem('userid'));
      // this.bid.user_id=sessionStorage.getItem('user_id');
      console.log(JSON.stringify(this.bid));

      this.service.placebid(this.bid).subscribe(response => {
        alert(JSON.stringify(response));
        this.router.navigate(['/bidder-marketplace']);
      })
    }
    else {
      alert("Please Enter an amount greater than or equal to minimum selling price");
    }

  }

  loadBid() {
    this.sells.sell_id = localStorage.getItem('sell_id');
    this.service.getTopBid(this.sells).subscribe(response => {
      console.log(JSON.stringify(response.list));
      this.Bids = response.list;
    })


    this.bids.sell_id=localStorage.getItem('sell_id');
    this.bids.user_id=sessionStorage.getItem('user_id');
    this.service.getActiveBids(this.bids).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.activeBids=data.list;
    })
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  
}
