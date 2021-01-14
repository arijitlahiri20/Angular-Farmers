import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sellrequests } from '../models/sellrequests.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {


  constructor(private http: HttpClient) { }

  placeRequest(sellrequests: Sellrequests) : Observable <any> {
    let url = "http://localhost:8181/farmer/place-sell-request";
    return this.http.post(url, sellrequests);
  }

  farmermarket(user: User) : Observable<any>{
  let url = "http://localhost:8181/farmer/marketplace";
    return this.http.post(url, user);
}

}
