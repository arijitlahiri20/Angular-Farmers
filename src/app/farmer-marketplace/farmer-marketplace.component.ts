import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-marketplace',
  templateUrl: './farmer-marketplace.component.html',
  styleUrls: ['./farmer-marketplace.component.css']
})
export class FarmerMarketplaceComponent implements OnInit {

  Sellrequests: any = [];
  user : any = {
    user_id:9
  };

  constructor(private service:FarmerService, private router:Router) { }

  ngOnInit() {
    this.market();
  }

  market(){
    this.user.user_id=sessionStorage.getItem('user_id');
    this.service.farmermarket(this.user).subscribe(data => {
      console.log(JSON.stringify(data));
      this.Sellrequests=data.list;
    })
  }

  viewBids(sell_id){
    localStorage.setItem('sell_id', sell_id);
    this.router.navigate(['/farmer-marketplace-sell']);
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



