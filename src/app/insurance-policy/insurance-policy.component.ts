import { Component, OnInit } from '@angular/core';
import { Insurance } from '../models/insurance.model';
import { InsuranceService } from '../services/insurance.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl , Validators } from '@angular/forms';



@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.css']
})
export class InsurancePolicyComponent implements OnInit {

  insurance = new Insurance();
  result = new Insurance();
  form2 : FormGroup;


  constructor(private service:InsuranceService,private router: Router) { }

  ngOnInit() {

    this.form2=new FormGroup({
    season:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]) ,
    crop:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]) ,
    area:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    sum_insured:new FormControl('',[Validators.required, Validators.pattern('[0-9]')]),
    year:new FormControl('',[Validators.required, Validators.pattern('[0-9]{4}')])
  })
  }

ApplyInsurance(){

  //this.insurance.status="PENDING";
  console.log(this.result);
  this.service.signupinsurance(this.result).subscribe(data=>{
       
       //this.message=data.message;
       alert(JSON.stringify(data));
       if(data.status=="SUCCESS")
         this.router.navigate(['/insurance-home']);

  })
}

InsurancePolicyCheck(){
    this.insurance.status="PENDING";
   console.log(this.insurance);
   this.service.calculateinsurance(this.insurance).subscribe(data=>{
        
        //this.message=data.message;
        alert(JSON.stringify(data));
        if(data.status=="SUCCESS")
          this.result=data.object;

    })
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}


