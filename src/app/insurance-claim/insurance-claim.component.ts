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
  id : any;

  insurance : any = {};

  constructor(private service:InsuranceService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.id = localStorage.getItem("insurance_id");
    this.service.getInsuranceById(this.id).subscribe(data=>{
      console.log(JSON.stringify(data));
      if(data.status=="SUCCESS"){
        this.insurance = data.object;
        this.claims.policy_no = data.object.policy_no;
        this.claims.sum_insured = data.object.sum_insured;
        this.claims.full_name = sessionStorage.getItem("full_name");
        this.claims.insurance_company = data.object.insurance_company;
      }
      else{
        alert("Error getting insurance details");
      }
        
  })

    this.form2 = this.formBuilder.group({
      insurance_company:['',[Validators.required, Validators.pattern('[a-zA-Z ][a-zA-Z ]*$')]] ,
      full_name:['',[Validators.required, Validators.pattern('[a-zA-Z ][a-zA-Z ]*$')]] ,
      loss_cause:['',[Validators.required, Validators.pattern('[a-zA-Z ][a-zA-Z ]*$')]] ,
      sum_insured:['',[Validators.required]],
      policy_no:['',[Validators.required]],
      loss_date:['',[Validators.required]]

    })
    
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0];
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
        console.log(JSON.stringify(data));
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
