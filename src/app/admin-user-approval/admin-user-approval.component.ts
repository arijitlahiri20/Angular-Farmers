import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-user-approval',
  templateUrl: './admin-user-approval.component.html',
  styleUrls: ['./admin-user-approval.component.css']
})
export class AdminUserApprovalComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  

  users: any = [];

  user :any = {
    user_id:0
  };

  constructor(private adminService: AdminService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.adminService.getUserApprovals().subscribe(data => {
      console.log(JSON.stringify(data));
      this.users=data.list;
    })
  }

  viewDetails(user_id, user_type){
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("user_type", user_type);
    this.router.navigate(['/admin-user-document']);
  }

  approve(user_id){
    this.user.user_id=user_id;
    this.adminService.approveUser(this.user).subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        console.log(data.message);
      }
      else{
        alert("Error in approving User!");
      }
      this.ngOnInit();
    })
  }

  reject(user_id){
    this.user.user_id=user_id;
    this.adminService.rejectUser(this.user).subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        console.log(data.message);
      }
      else{
        alert("Error in Rejecteing User!");
      }
      this.ngOnInit();
    })
  }

  goback(){
    this.router.navigate(['/admin-home']);
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
