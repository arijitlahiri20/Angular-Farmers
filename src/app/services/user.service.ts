import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { } //create instance
  //constructor() { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8181/login";
   return this.http.post(url, login); 
  }

  signupfarmer(user: User) : Observable<any> {
    let url = "http://localhost:8181/signup-farmer";
   return this.http.post(url, user); 
  } 
    
  signupbidder(user: User) : Observable<any> {
    let url = "http://localhost:8181/signup-bidder";
   return this.http.post(url, user); 
  } 


}
