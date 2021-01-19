import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bids } from '../models/bids.model';
import { Sellrequests } from '../models/sellrequests.model';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-marketplace-sell',
  templateUrl: './farmer-marketplace-sell.component.html',
  styleUrls: ['./farmer-marketplace-sell.component.css']
})
export class FarmerMarketplaceSellComponent implements OnInit {

  bids:any=[];
  sell_id = localStorage.getItem('sell_id');
  sr:any={
    sell_id:0
  };
  
  constructor(private service:FarmerService, private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
    
    console.log(this.sell_id);
    this.getBids();
  }

  goback(){
    localStorage.removeItem('sell_id');
    this.router.navigate(['/farmer-marketplace']);
  }

  getBids(){
    this.sr.sell_id=localStorage.getItem('sell_id');
    this.service.bid(this.sr).subscribe(data => {
      console.log(JSON.stringify(data));
      this.bids=data.list;
    })
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
