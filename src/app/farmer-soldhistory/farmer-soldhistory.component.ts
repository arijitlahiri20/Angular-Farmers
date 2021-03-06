import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-soldhistory',
  templateUrl: './farmer-soldhistory.component.html',
  styleUrls: ['./farmer-soldhistory.component.css']
})
export class FarmerSoldhistoryComponent implements OnInit {

  soldhistory: any=[];
  

  user: any={
    user_id:0
  };
  
  
  constructor(private service:FarmerService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
    
    this.gethistory();
  }

  gethistory(){

    this.user.user_id=sessionStorage.getItem('user_id');
        
    this.service.soldhistory(this.user).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.soldhistory=data.list;

    })
  }

  goback(){
    this.router.navigate(['/farmer-home']);
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}