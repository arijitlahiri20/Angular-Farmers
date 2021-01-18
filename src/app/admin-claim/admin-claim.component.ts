import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-claim',
  templateUrl: './admin-claim.component.html',
  styleUrls: ['./admin-claim.component.css']
})
export class AdminClaimComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  

  claim: any = [];

  clm :any = {
    claim_id:0,
    insurance_id:0
  };

  constructor(private adminService: AdminService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.adminService.getClaimApprovals().subscribe(data => {
      console.log(JSON.stringify(data));
      this.claim=data.list;
    })
  }

  approve(claim_id, insurance_id){
    this.clm.claim_id=claim_id;
    this.clm.insurance_id=insurance_id;
    this.adminService.approveClaim(this.clm).subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        alert(data.message);  
      }
      else{
        alert("Error in approving Claim!")
      }
      this.ngOnInit();
    })
  }

  reject(claim_id, insurance_id){
    this.clm.claim_id=claim_id;
    this.clm.insurance_id=insurance_id;
    this.adminService.rejectClaim(this.clm).subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        alert(data.message);  
      }
      else{
        alert("Error in Rejecting Claim!")
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
