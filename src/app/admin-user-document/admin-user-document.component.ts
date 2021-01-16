import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-user-document',
  templateUrl: './admin-user-document.component.html',
  styleUrls: ['./admin-user-document.component.css']
})
export class AdminUserDocumentComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  
  user_id= localStorage.getItem("user_id");
  user_type= localStorage.getItem("user_type");
  user: any = {};


  constructor(private adminService: AdminService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.adminService.getUserDocuments(Number(this.user_id)).subscribe(data => {
      console.log(JSON.stringify(data));
      this.user=data.object;
    })
  }

  goback(){
    localStorage.clear();
    this.router.navigate(['/admin-user-approval']);

  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
