import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { FarmerMarketplaceComponent } from './farmer-marketplace/farmer-marketplace.component';
import { BidderMarketplaceComponent } from './bidder-marketplace/bidder-marketplace.component';
import { InsuranceHomeComponent } from './insurance-home/insurance-home.component';
import { FarmerSellrequestComponent } from './farmer-sellrequest/farmer-sellrequest.component';
import { BidderBidrequestComponent } from './bidder-bidrequest/bidder-bidrequest.component';
import { BidderBidhistoryComponent } from './bidder-bidhistory/bidder-bidhistory.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { InsuranceHistoryComponent } from './insurance-history/insurance-history.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { FarmerSoldhistoryComponent } from './farmer-soldhistory/farmer-soldhistory.component';
import { FarmerMarketplaceSellComponent } from './farmer-marketplace-sell/farmer-marketplace-sell.component';
import { AdminMarketplaceComponent } from './admin-marketplace/admin-marketplace.component';
import { AdminUserApprovalComponent } from './admin-user-approval/admin-user-approval.component';
import { AdminUserDocumentComponent } from './admin-user-document/admin-user-document.component';
import { AdminInsuranceComponent } from './admin-insurance/admin-insurance.component';
import { AdminClaimComponent } from './admin-claim/admin-claim.component';
import { AdminContactusComponent } from './admin-contactus/admin-contactus.component';
import { AdminMarkeplaceBidsComponent } from './admin-markeplace-bids/admin-markeplace-bids.component';

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
    SignupBidderComponent,
    FarmerMarketplaceComponent,
    BidderMarketplaceComponent,
    InsuranceHomeComponent,
    FarmerSellrequestComponent,
    BidderBidrequestComponent,
    BidderBidhistoryComponent,
    InsurancePolicyComponent,
    InsuranceClaimComponent,
    InsuranceHistoryComponent,
    ClaimHistoryComponent,
    FarmerSoldhistoryComponent,
    FarmerMarketplaceSellComponent,
    AdminMarketplaceComponent,
    AdminUserApprovalComponent,
    AdminUserDocumentComponent,
    AdminInsuranceComponent,
    AdminClaimComponent,
    AdminContactusComponent,
    AdminMarkeplaceBidsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }