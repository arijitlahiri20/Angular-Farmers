import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sellrequests } from '../models/sellrequests.model';
import { FarmerService } from '../services/farmer.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-farmer-sellrequest',
  templateUrl: './farmer-sellrequest.component.html',
  styleUrls: ['./farmer-sellrequest.component.css']
})
export class FarmerSellrequestComponent implements OnInit {
  submitted = false;
  sellrequests: Sellrequests = new Sellrequests();
  form1: FormGroup;
  form2: FormGroup;
  soilpH: any;
  user: any = { user_id: 0 };
  userId: any;
  sell_id: any;

  constructor(private farmerService: FarmerService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }

    this.form1 = new FormGroup({
      croptype: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      fertilizer: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      msp: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      cropname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      // soilph: new FormControl('',[Validators.required, Validators.pattern('[0-9]')])
    })
    this.userId = sessionStorage.getItem('user_id');

    this.form2 = new FormGroup({

    })

  }

  get f() { return this.form1.controls; }

  onSoilPhCertificateChange(event) {
    this.soilpH = event.target.files[0];
  }


  placeRequest() {

    this.submitted = true;
    if (this.form1.invalid) {
      return;
    }

    this.user.user_id = sessionStorage.getItem('user_id');
    this.sellrequests.user_id = this.user.user_id;
    console.log(JSON.stringify(this.sellrequests));
    this.farmerService.placeRequest(this.sellrequests).subscribe(response => {
      // alert(JSON.stringify(response));
      this.sell_id = response.registeredCustomerId;
      console.log(this.sell_id);
      // this.router.navigate(['/farmer-home']);
    })

  }

  upload() {
    let formData: FormData = new FormData();
    formData.append('sell_id', this.sell_id);
    formData.append('user_id', this.userId);
    formData.append('ph_certificate', this.soilpH);
    console.log(formData);
    //console.log(this.userId);
    //console.log(this.soilpH);
    this.farmerService.uploadpH(formData).subscribe(response => {
      console.log(JSON.stringify(response));
      if (response.status == "SUCCESS") {
        console.log("Registered successfully")
        this.router.navigate(['/farmer-home']);
      }
      else {
        alert("Error uploading document")
      }

    })

  }





  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
