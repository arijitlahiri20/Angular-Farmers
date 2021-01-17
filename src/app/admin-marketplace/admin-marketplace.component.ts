import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-marketplace',
  templateUrl: './admin-marketplace.component.html',
  styleUrls: ['./admin-marketplace.component.css']
})
export class AdminMarketplaceComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  

  sell: any = [];

  sl :any = {
    sell_id:0
  };

  constructor(private adminService: AdminService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.adminService.getSellMarketplace().subscribe(data => {
      console.log(JSON.stringify(data));
      this.sell=data.list;
    })
  }

  viewBids(sell_id, user_id, msp){
    localStorage.setItem("sell_id", sell_id);
    localStorage.setItem("msp", msp);
    //alert("Routing to bids list for sell_id = " + sell_id );
    this.router.navigate(['/admin-marketplace-bids']);
    
  }

  goback(){
    this.router.navigate(['/admin-home']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
