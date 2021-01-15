import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-farmer-home-page',
  templateUrl: './farmer-home-page.component.html',
  styleUrls: ['./farmer-home-page.component.css']
})
export class FarmerHomePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("user_id") === null) {
      alert("You are Logged Out, Login again!");
      this.router.navigate(['/login']);
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
