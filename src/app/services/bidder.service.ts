import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bids } from '../models/bids.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient) { }

  placebid(bid: Bids) : Observable<any> {
    let url = "http://localhost:8181/bidder/place-bid";
   return this.http.post(url, bid); 
  }

  bidhistory(user: User) : Observable<any> {
    let url = "http://localhost:8181/bidder/bid-history";
   return this.http.post(url, user); 
  }

  biddermarket() : Observable<any> {
    let url = "http://localhost:8181/bidder/marketplace";
   return this.http.get(url); 
  }

}
