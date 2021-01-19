import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BidderService } from '../services/bidder.service';
@Component({
  selector: 'app-bidder-marketplace',
  templateUrl: './bidder-marketplace.component.html',
  styleUrls: ['./bidder-marketplace.component.css']
})
export class BidderMarketplaceComponent implements OnInit {

  Sellrequests: any=[];
  sell_id :any;
  msp:any;
  constructor(private service:BidderService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
    
   this.loadmarket();
  }

  loadmarket(){
  
    this.service.biddermarket().subscribe(data => {
      console.log(JSON.stringify(data));
      this.Sellrequests=data.list;
    })

  }

  placebid(sell_id ,msp){

    localStorage.setItem('sell_id', sell_id);
    localStorage.setItem('msp',msp);
    this.router.navigate(['/bidder-bidrequest']);
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

