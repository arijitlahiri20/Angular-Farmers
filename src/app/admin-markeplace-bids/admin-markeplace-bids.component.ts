import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-markeplace-bids',
  templateUrl: './admin-markeplace-bids.component.html',
  styleUrls: ['./admin-markeplace-bids.component.css']
})
export class AdminMarkeplaceBidsComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  
  sell_id = localStorage.getItem("sell_id");
  msp = localStorage.getItem("msp");

  bids : any = [];

  sell : any = {
    sell_id:0
  };

  bid : any = {
    bid_id:0,
    sell_id:0,
    user_id:0
  };
  constructor(private adminService: AdminService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
    this.sell.sell_id = this.sell_id;
    this.adminService.getListOfBids(this.sell).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.bids = data.list;
    })
  }

  closeAuction(bid_id, sell_id, user_id){
    this.bid.bid_id = bid_id;
    this.bid.sell_id = sell_id;
    this.bid.user_id = user_id;
    this.adminService.closeAuction(this.bid).subscribe(data =>{
      console.log(JSON.stringify(data));
      if(data.status="SUCCESS"){
        alert(data.message);
        this.router.navigate(['/admin-marketplace']);
      }
      else{
        alert("Error Closing Auction");
      }
      this.ngOnInit();
    })
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goback(){
    localStorage.clear();
    this.router.navigate(['/admin-marketplace']);
  }

}
