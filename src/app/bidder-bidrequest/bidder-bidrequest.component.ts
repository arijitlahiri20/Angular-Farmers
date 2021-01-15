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
  sell_id = localStorage.getItem('sell_id');
  constructor(private service: BidderService, private router: Router) { }

  ngOnInit() {
  }

  placebid() {
    this.bid.user_id=JSON.parse(sessionStorage.getItem('user_id'));
    this.bid.sell_id=JSON.parse(this.sell_id);
    this.bid.status='PENDING';
   // this.bid.user_id=JSON.parse(localStorage.getItem('userid'));
   // this.bid.user_id=sessionStorage.getItem('user_id');
    console.log(JSON.stringify(this.bid));
    this.service.placebid(this.bid).subscribe(response => {
      alert(JSON.stringify(response));
      this.router.navigate(['/bidder-home']);
    })

  }
}
