import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:8181";

  constructor(private http: HttpClient) { } //create instance
  //constructor() { }

  login(login: Login) : Observable<any> {
    let url = this.baseURL + "/login";
   return this.http.post(url, login); 
  }

  signupfarmer(user: User) : Observable<any> {
    let url = this.baseURL + "/signup-farmer";
   return this.http.post(url, user); 
  } 
    
  signupbidder(user: User) : Observable<any> {
    let url = this.baseURL + "/signup-bidder";
   return this.http.post(url, user); 
  } 

  documentupload(formData:FormData):Observable<any>{
    let url = this.baseURL + "/document-upload";
    return this.http.post(url,formData);
  }

  getNewPassword(user):Observable<any>{
    let url = this.baseURL + "/send-email"
    return this.http.post(url,user);
  }

}
