import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Insurance} from '../models/insurance.model';
import { Claims} from '../models/claims.model';


@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  

  baseURL="http://localhost:8181/";

  constructor(private http: HttpClient) { }

  calculateinsurance(insurance: Insurance) : Observable<any> {
    let url = this.baseURL+"/farmer/insurance/calculate";
   return this.http.post(url, insurance); 
  } 

  signupinsurance(insurance: Insurance) : Observable<any> {
    let url = this.baseURL+"/farmer/insurance/registerPolicy";
   return this.http.post(url, insurance); 
  } 

  getInsuranceHistory(user: any) : Observable<any> {
    let url = this.baseURL+"/farmer/insurance/insurance-history";
   return this.http.post(url, user);
  }

  signupclaim(claims: Claims) : Observable<any> {
    let url = this.baseURL+ "farmer/insurance/registerClaim";
   return this.http.post(url, claims); 
  }

  getClaimHistory(user: any) : Observable<any> {
    let url = this.baseURL+"/farmer/insurance/claim-history";
   return this.http.post(url, user);
  }

  
}
