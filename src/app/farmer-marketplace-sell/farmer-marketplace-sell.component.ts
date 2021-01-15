import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-marketplace-sell',
  templateUrl: './farmer-marketplace-sell.component.html',
  styleUrls: ['./farmer-marketplace-sell.component.css']
})
export class FarmerMarketplaceSellComponent implements OnInit {

  sell_id = localStorage.getItem('sell_id');

  constructor(private router: Router) { }

  ngOnInit() {
    alert(this.sell_id);
  }

  back(){
    localStorage.removeItem('sell_id');
    this.router.navigate(['/farmer-marketplace']);
  }

}
