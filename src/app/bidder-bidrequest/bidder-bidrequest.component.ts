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

  constructor(private service: BidderService, private router: Router) { }

  ngOnInit() {
  }

  placebid() {
    this.bid.user_id=10;
    this.bid.sell_id=2;

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
