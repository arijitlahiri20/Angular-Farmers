import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-farmer-marketplace',
  templateUrl: './farmer-marketplace.component.html',
  styleUrls: ['./farmer-marketplace.component.css']
})
export class FarmerMarketplaceComponent implements OnInit {

  Bids: any[];

  constructor(private service:FarmerService, private router:Router) { }

  ngOnInit() {
    this.market();
  }

  market(){
    this.service.farmermarket().subscribe(data => {
      console.log(JSON.stringify(data));
      this.Bids=data.list;
    })
  }
}



