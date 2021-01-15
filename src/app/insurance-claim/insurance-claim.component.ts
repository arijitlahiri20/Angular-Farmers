import { Component, OnInit } from '@angular/core';
//import { Insurance } from '../models/insurance.model';
import { InsuranceService } from '../services/insurance.service';
import { Router } from '@angular/router';
import { Claims } from '../models/claims.model';

@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {

  claims =new Claims();

  constructor(private service:InsuranceService,private router: Router) { }

  ngOnInit() {
  }

  InsuranceClaimCheck(){

    this.claims.insurance_id= this.claims.policy_no;
    this.claims.status="PENDING";
  
   console.log(this.claims);

   this.service.signupclaim(this.claims).subscribe(data=>{
        
        //this.message=data.message;
        alert(JSON.stringify(data));
        if(data.status=="SUCCESS")
          this.router.navigate(['/insurance-homeApplyInsurance()']);
   })
}

}
