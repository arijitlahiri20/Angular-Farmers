import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { BidderBidhistoryComponent } from './bidder-bidhistory/bidder-bidhistory.component';
import { BidderBidrequestComponent } from './bidder-bidrequest/bidder-bidrequest.component';
import { BidderHomePageComponent } from './bidder-home-page/bidder-home-page.component';
import { BidderMarketplaceComponent } from './bidder-marketplace/bidder-marketplace.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FarmerHomePageComponent } from './farmer-home-page/farmer-home-page.component';
import { FarmerMarketplaceComponent } from './farmer-marketplace/farmer-marketplace.component';
import { FarmerSellrequestComponent } from './farmer-sellrequest/farmer-sellrequest.component';
import { FarmerSoldhistoryComponent } from './farmer-soldhistory/farmer-soldhistory.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { InsuranceHistoryComponent } from './insurance-history/insurance-history.component';
import { InsuranceHomeComponent } from './insurance-home/insurance-home.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupBidderComponent } from './signup-bidder/signup-bidder.component';
import { SignupFarmerComponent } from './signup-farmer/signup-farmer.component';
import { SignupHomeComponent } from './signup-home/signup-home.component';


const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"login", component:LoginPageComponent},
  {path:"signup", component:SignupHomeComponent},
  {path:"signup-farmer", component:SignupFarmerComponent},
  {path:"signup-bidder", component:SignupBidderComponent},
  {path:"farmer-home", component:FarmerHomePageComponent},
  {path:"bidder-home", component:BidderHomePageComponent},
  {path:"admin-home", component:AdminHomePageComponent},
  {path:"farmer-marketplace", component:FarmerMarketplaceComponent},
  {path:"farmer-sellrequest", component:FarmerSellrequestComponent},
  {path:"farmer-soldhistory", component:FarmerSoldhistoryComponent},
  {path:"bidder-marketplace", component:BidderMarketplaceComponent},
  {path:"bidder-bidrequest", component:BidderBidrequestComponent},
  {path:"bidder-bidhistory", component:BidderBidhistoryComponent},
  {path:"insurance-home", component:InsuranceHomeComponent},
  {path:"insurance-policy", component:InsurancePolicyComponent},
  {path:"insurance-claim", component:InsuranceClaimComponent},
  {path:"insurance-history", component:InsuranceHistoryComponent},
  {path:"claim-history", component:ClaimHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
