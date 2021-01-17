import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sellrequests } from '../models/sellrequests.model';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-sellrequest',
  templateUrl: './farmer-sellrequest.component.html',
  styleUrls: ['./farmer-sellrequest.component.css']
})
export class FarmerSellrequestComponent implements OnInit {
  submitted:false;
  sellrequests : Sellrequests=new Sellrequests();
  form1:FormGroup;
  // form = new FormGroup({
  //   croptype: new FormControl('',Validators.required)
  // })
  constructor(private farmerService: FarmerService, private router: Router) { }

  ngOnInit() {
    this.form1=new FormGroup({
      croptype: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      fertilizer: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      msp: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}')]),
      cropname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      quantity: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}')]),
      soilph: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}')])
      })
  }

  get f() { return this.form1.controls; }

  placeRequest(){
    this.sellrequests.user_id=2;
    alert(JSON.stringify(this.sellrequests));
    this.farmerService.placeRequest(this.sellrequests).subscribe(response => {
    alert(JSON.stringify(response));
    this.router.navigate(['/farmer-home']);
    })
  
  }

//   getNewPassword() {
//     this.submitted = true;
//     if (this.form1.invalid) {
//       return;
//   }
// }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
