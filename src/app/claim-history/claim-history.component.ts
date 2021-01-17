import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.css']
})
export class ClaimHistoryComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  
  user_id = sessionStorage.getItem("user_id");

  claim: any = [];

  user : any = {
    user_id: 0
  }


  constructor(private insuranceService: InsuranceService, private router:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
    this.user.user_id = this.user_id;
    this.insuranceService.getClaimHistory(this.user).subscribe(data => {
      console.log(JSON.stringify(data));
      this.claim=data.list;
    })
  }

  goback(){
    this.router.navigate(['/insurance-home']);
  }
  
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
