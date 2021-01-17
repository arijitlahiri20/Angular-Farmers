import { Component, OnInit } from '@angular/core';
//import { Insurance } from '../models/insurance.model';
import { InsuranceService } from '../services/insurance.service';
import { Router } from '@angular/router';
import { Claims } from '../models/claims.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {

  claims =new Claims();
  form2 : FormGroup;
  submitted = false;

  constructor(private service:InsuranceService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form2 = this.formBuilder.group({
      insurance_company:['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]] ,
      full_name:['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]] ,
      loss_cause:['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]] ,
      sum_insured:['',[Validators.required, Validators.pattern('[0-9]')]],
      policy_no:['',[Validators.required, Validators.pattern('[0-9]')]],
      loss_date:['',[Validators.required]]

    })

  }

  get f() { return this.form2.controls; }


  InsuranceClaimCheck(){

    this.submitted =true;
    if(this.form2.invalid){
      return;
    }

    this.claims.insurance_id= this.claims.policy_no;
    this.claims.status="PENDING";
  
   console.log(this.claims);

   this.service.signupclaim(this.claims).subscribe(data=>{
        
        //this.message=data.message;
        alert(JSON.stringify(data));
        if(data.status=="SUCCESS")
          this.router.navigate(['/insurance-home']);
    })
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
