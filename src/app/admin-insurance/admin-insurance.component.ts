import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../models/insurance.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-insurance',
  templateUrl: './admin-insurance.component.html',
  styleUrls: ['./admin-insurance.component.css']
})
export class AdminInsuranceComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  

  insurance: any = [];

  ins :any = {
    insurance_id:0,
    user_id:0
  };

  constructor(private adminService: AdminService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.adminService.getInsuranceApprovals().subscribe(data => {
      console.log(JSON.stringify(data));
      this.insurance=data.list;
    })
  }

  approve(insurance_id, user_id){
    this.ins.insurance_id=insurance_id;
    this.ins.user_id=user_id;
    this.adminService.approveInsurance(this.ins).subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        alert(data.message);
      }
      else{
        alert("Error in approving insurance!")
      }
      this.ngOnInit();
    })
  }

  reject(insurance_id, user_id){
    this.ins.insurance_id=insurance_id;
    this.ins.user_id=user_id;
    this.adminService.rejectInsurance(this.ins).subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        alert(data.message);
      }
      else{
        alert("Error in Rejecting insurance!")
      }
      this.ngOnInit();
    })
  }

  goback(){
    this.router.navigate(['/admin-home']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
