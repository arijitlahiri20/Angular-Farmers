import { Component, OnInit } from '@angular/core';
//import { Insurance } from '../models/insurance.model';
import { InsuranceService } from '../services/insurance.service';
import { Router } from '@angular/router';
import { Claims } from '../models/claims.model';
import { FormGroup, FormControl , Validators } from '@angular/forms';


@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {

  claims =new Claims();
  form2 : FormGroup;


  constructor(private service:InsuranceService,private router: Router) { }

  ngOnInit() {

    this.form2=new FormGroup({
      insurance_company:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]) ,
      full_name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]) ,
      loss_cause:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]) ,
      sum_insured:new FormControl('',[Validators.required, Validators.pattern('[0-9]')]),
      policy_no:new FormControl('',[Validators.required, Validators.pattern('[0-9]')]),
      loss_date:new FormControl('',[Validators.required])

    })

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

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
