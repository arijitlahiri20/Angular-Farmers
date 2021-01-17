import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bids } from '../models/bids.model';
import { Sellrequests } from '../models/sellrequests.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  baseURL: string = "http://localhost:8181";

  constructor(private http: HttpClient) { }

  placeRequest(sellrequests: Sellrequests) : Observable <any> {
    let url = this.baseURL + "/farmer/place-sell-request";
    return this.http.post(url, sellrequests);
  }

  uploadpH(formData:FormData): Observable<any>{
    let url = this.baseURL + "/farmer/upload-ph";
    return this.http.post(url, formData);
  }

  farmermarket(user: User) : Observable<any>{
  let url = this.baseURL + "/farmer/marketplace";
    return this.http.post(url, user);
  }

  soldhistory(user: User) : Observable<any> {
    let url = this.baseURL + "/farmer/sold-history";
    return this.http.post(url, user); 
  }

  bid(sr) : Observable<any> {
    let url = this.baseURL + "/farmer/marketplace/sellrequest";
    return this.http.post(url, sr);
  }

  

}
