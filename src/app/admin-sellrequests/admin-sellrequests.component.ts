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
  constructor(private adminService: AdminService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
