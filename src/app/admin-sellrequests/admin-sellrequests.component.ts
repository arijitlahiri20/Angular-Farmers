import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-sellrequests',
  templateUrl: './admin-sellrequests.component.html',
  styleUrls: ['./admin-sellrequests.component.css']
})
export class AdminSellrequestsComponent implements OnInit {

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

    this.adminService.getSellRequestApprovals().subscribe(data => {
      console.log(JSON.stringify(data));
      this.sell=data.list;
    })
  }

  approve(sell_id, user_id){
    this.sl.sell_id=sell_id;
    this.adminService.approveSellRequest(this.sl).subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        alert(data.message);
      }
      else{
        alert("Error in approving Sell Request!");
      }
      this.ngOnInit();
    })
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
