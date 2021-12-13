import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {param } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  constructor(
    private http:HttpClient
    
  ) { }
  
  



  checkDetails(params:any){
    return this.http.post('http://1683-102-22-11-130.ngrok.io/login',params)
  }
}
