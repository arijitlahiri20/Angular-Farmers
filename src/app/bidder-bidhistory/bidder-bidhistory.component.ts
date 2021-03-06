import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { BidderService } from '../services/bidder.service';

@Component({
  selector: 'app-bidder-bidhistory',
  templateUrl: './bidder-bidhistory.component.html',
  styleUrls: ['./bidder-bidhistory.component.css']
})
export class BidderBidhistoryComponent implements OnInit {

  bidhistory: any=[];

  activeBids: any=[];

  user: User = new User();

  constructor(private service:BidderService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
    
    this.loadhistory();
  }

  loadhistory(){

    this.user.user_id=JSON.parse(sessionStorage.getItem('user_id'));
    
    this.service.bidhistory(this.user).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.bidhistory=data.list;

    })

    // this.service.getActiveBids(this.user).subscribe(data =>{
    //   console.log(JSON.stringify(data));
    //   this.activeBids=data.list;
    // })
  }
  goback(){
    localStorage.clear();
    this.router.navigate(['/bidder-home']);
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
