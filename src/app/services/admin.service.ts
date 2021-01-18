import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL: string = "http://localhost:8181";
  
  constructor(private http: HttpClient) { }

  getUserApprovals() : Observable<any> {
    let url = this.baseURL + "/admin/user-approval-list";
   return this.http.get(url); 
  }

  getUserDocuments(user_id:number) : Observable<any> {
    let url = this.baseURL + "/admin/view-document?user_id="+user_id;
   return this.http.get(url); 
  }

  approveUser(user: any) : Observable<any> {
    let url = this.baseURL + "/admin/approve-user";
   return this.http.post(url, user); 
  }

  rejectUser(user: any) : Observable<any> {
    let url = this.baseURL + "/admin/reject-user";
   return this.http.post(url, user); 
  }

  getSellRequestApprovals() : Observable<any> {
    let url = this.baseURL + "/admin/sell-approval-list";
   return this.http.get(url); 
  }

  getPhCertificate(sell_id:number) : Observable<any> {
    let url = this.baseURL + "/admin/view-ph?sell_id="+sell_id;
   return this.http.get(url); 
  }

  approveSellRequest(sell: any) : Observable<any> {
    let url = this.baseURL + "/admin/approve-sell-request";
   return this.http.post(url, sell); 
  }

  rejectSellRequest(sell: any) : Observable<any> {
    let url = this.baseURL + "/admin/reject-sell-request";
   return this.http.post(url, sell); 
  }

  getInsuranceApprovals() : Observable<any> {
    let url = this.baseURL + "/admin/insurance-approval-list";
   return this.http.get(url); 
  }

  approveInsurance(insurance: any) : Observable<any> {
    let url = this.baseURL + "/admin/approve-insurance";
   return this.http.post(url, insurance); 
  }

  rejectInsurance(insurance: any) : Observable<any> {
    let url = this.baseURL + "/admin/reject-insurance";
   return this.http.post(url, insurance); 
  }

  getClaimApprovals() : Observable<any> {
    let url = this.baseURL + "/admin/claim-approval-list";
   return this.http.get(url); 
  }

  approveClaim(claim: any) : Observable<any> {
    let url = this.baseURL + "/admin/approve-claim";
   return this.http.post(url, claim); 
  }

  rejectClaim(claim: any) : Observable<any> {
    let url = this.baseURL + "/admin/reject-claim";
   return this.http.post(url, claim); 
  }

  getSellMarketplace() : Observable<any> {
    let url = this.baseURL + "/admin/approved-sell-list";
   return this.http.get(url); 
  }

  getListOfBids(sell: any) : Observable<any> {
    let url = this.baseURL + "/admin/bids-list";
   return this.http.post(url, sell); 
  }

  closeAuction(bid: any) : Observable<any> {
    let url = this.baseURL + "/admin/close-auction";
   return this.http.post(url, bid); 
  }

  getContactUsList() : Observable<any> {
    let url = this.baseURL + "/admin/contact-us-list";
   return this.http.get(url); 
  }




  

}
