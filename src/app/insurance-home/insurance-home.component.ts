import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-home',
  templateUrl: './insurance-home.component.html',
  styleUrls: ['./insurance-home.component.css']
})
export class InsuranceHomeComponent implements OnInit {

  constructor(private service:InsuranceService,private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
