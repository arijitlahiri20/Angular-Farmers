import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  farmermarket(user: User) : Observable<any>{
  let url = this.baseURL + "/farmer/marketplace";
    return this.http.post(url, user);
}

}
