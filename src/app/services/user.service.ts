import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogin(login: Login) {
    return null;
  }

  constructor() { }
}
