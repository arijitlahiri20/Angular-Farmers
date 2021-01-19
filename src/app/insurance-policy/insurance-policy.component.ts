import { Component, OnInit } from '@angular/core';
import { Insurance } from '../models/insurance.model';
import { InsuranceService } from '../services/insurance.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.css']
})
export class InsurancePolicyComponent implements OnInit {

  insurance = new Insurance();
  result = new Insurance();
  form2 : FormGroup;
  submitted = false;


  constructor(private service:InsuranceService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.form2 = this.formBuilder.group({
    season:['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]] ,
    crop:['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
    area:['',[Validators.required]],
    sum_insured:['',[Validators.required, Validators.pattern('[0-9]+')]],
    year:['',[Validators.required, Validators.pattern('[0-9]{4}')]]
  })
  }

  get f() { return this.form2.controls; }


ApplyInsurance(){

  
  //this.insurance.status="PENDING";
  console.log(this.result);
  this.service.signupinsurance(this.result).subscribe(data=>{
       
       //this.message=data.message;
       console.log(JSON.stringify(data));
       if(data.status=="SUCCESS")
         this.router.navigate(['/insurance-home']);

  })
}

InsurancePolicyCheck(){

  this.submitted =true;
    if(this.form2.invalid){
      alert("Invalid data in input fields!")
      return;
    }

    this.insurance.status="PENDING";
  this.insurance.user_id= Number(sessionStorage.getItem("user_id"));
   console.log(this.insurance);
   this.service.calculateinsurance(this.insurance).subscribe(data=>{
        
        //this.message=data.message;
        console.log(JSON.stringify(data));
        if(data.status=="SUCCESS")
          this.result=data.object;

    })
  }

  reset(){
    //alert("calling");
    localStorage.clear();
    this.router.navigate(['/insurance-home']);  
  }
  
  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}


