import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FarmerHomePageComponent } from './farmer-home-page/farmer-home-page.component';
import { BidderHomePageComponent } from './bidder-home-page/bidder-home-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { SignupHomeComponent } from './signup-home/signup-home.component';
import { SignupFarmerComponent } from './signup-farmer/signup-farmer.component';
import { SignupBidderComponent } from './signup-bidder/signup-bidder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginPageComponent,
    FarmerHomePageComponent,
    BidderHomePageComponent,
    AdminHomePageComponent,
    SignupHomeComponent,
    SignupFarmerComponent,
    SignupBidderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }