import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL: string = "http://localhost:8181";
  
  constructor() { }
}
