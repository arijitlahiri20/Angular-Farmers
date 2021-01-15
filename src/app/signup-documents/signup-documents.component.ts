import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-documents',
  templateUrl: './signup-documents.component.html',
  styleUrls: ['./signup-documents.component.css']
})
export class SignupDocumentsComponent implements OnInit {
//user = new User();
aadhar: any;
pan:any;
certificate:any;
traderLicense:any;
userId:any;
userType:any;
  

  constructor(private service :UserService, private router:Router) { }

  ngOnInit() :void {
    this.userType=localStorage.getItem('usertype');
    this.userId=localStorage.getItem('user_id');
  }

  onAadharChange(event){
    this.aadhar=event.target.files[0];
  }
  onPanChange(event){
    this.pan=event.target.files[0];
  }
  onCertificateChange(event){
    this.certificate=event.target.files[0];
  }
  onTraderLicenseChange(event){
    this.traderLicense=event.target.files[0];
  }

  upload(){
    let formData:FormData = new FormData();
    formData.append('user_id',this.userId);
    formData.append('aadhar',this.aadhar);
    formData.append('pan',this.pan);
    if(this.userType=='BIDDER'){
    formData.append('trader_licence',this.traderLicense);
    formData.append('certificate',this.traderLicense);
    }
    else{
    formData.append('certificate',this.certificate);
    formData.append('trader_licence',this.certificate);
    }
    console.log(formData);
    console.log(this.userId);
    console.log(this.aadhar);
    console.log(this.pan);
    console.log(this.traderLicense);
    console.log(this.certificate);
    


    this.service.documentupload(formData).subscribe(response =>{
     // alert(JSON.stringify(response));
      alert("Registered successfully")
      this.router.navigate(['/login']);
    })
  }

}
