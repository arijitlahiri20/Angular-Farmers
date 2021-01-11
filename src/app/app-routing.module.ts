import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { BidderHomePageComponent } from './bidder-home-page/bidder-home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FarmerHomePageComponent } from './farmer-home-page/farmer-home-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupBidderComponent } from './signup-bidder/signup-bidder.component';
import { SignupFarmerComponent } from './signup-farmer/signup-farmer.component';
import { SignupHomeComponent } from './signup-home/signup-home.component';


const routes: Routes = [
  {path:"/", component:HomePageComponent},
  {path:"/about-us", component:AboutUsComponent},
  {path:"/contact-us", component:ContactUsComponent},
  {path:"/login", component:LoginPageComponent},
  {path:"/signup", component:SignupHomeComponent},
  {path:"/signup-farmer", component:SignupFarmerComponent},
  {path:"/signup-bidder", component:SignupBidderComponent},
  {path:"/farmer-home", component:FarmerHomePageComponent},
  {path:"/bidder-home", component:BidderHomePageComponent},
  {path:"/admin-home", component:AdminHomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }