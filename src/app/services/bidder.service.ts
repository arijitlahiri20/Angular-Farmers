import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bids } from '../models/bids.model';
import { Sellrequests } from '../models/sellrequests.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  baseURL: string = "http://localhost:8181";
  
  constructor(private http: HttpClient) { }

  placebid(bid: Bids) : Observable<any> {
    let url = this.baseURL + "/bidder/place-bid";
   return this.http.post(url, bid); 
  }

  bidhistory(user: User) : Observable<any> {
    let url = this.baseURL + "/bidder/bid-history";
   return this.http.post(url, user); 
  }

  biddermarket() : Observable<any> {
    let url = this.baseURL + "/bidder/marketplace";
   return this.http.get(url); 
  }

  getTopBid(sell) : Observable<any> {
    let url = this.baseURL + "/bidder/topbid";
   return this.http.post(url, sell); 
  }

}
