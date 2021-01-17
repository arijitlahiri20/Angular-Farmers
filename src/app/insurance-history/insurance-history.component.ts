import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-history',
  templateUrl: './insurance-history.component.html',
  styleUrls: ['./insurance-history.component.css']
})
export class InsuranceHistoryComponent implements OnInit {

  full_name = sessionStorage.getItem("full_name");  
  user_id = sessionStorage.getItem("user_id");

  insurance: any = [];

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
    this.insuranceService.getInsuranceHistory(this.user).subscribe(data => {
      console.log(JSON.stringify(data));
      this.insurance=data.list;
    })
  }

  // renew(insurance_id, user_id){
  //   this.ins.insurance_id=insurance_id;
  //   this.insuranceService.renewInsurance(this.ins).subscribe(data => {
  //     console.log(JSON.stringify(data));
  //     if(data.status=="SUCCESS"){
  //       alert(data.message);
  //     }
  //     else{
  //       alert("Error in approving insurance!")
  //     }
  //     this.ngOnInit();
  //   })
  // }

  goback(){
    this.router.navigate(['/insurance-home']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
