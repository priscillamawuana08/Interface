import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {param } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  checkDetails(params:HttpParams){
    if(params.get("trade") == "SELL") {
      return this.http.post('https://group16-banking-app.herokuapp.com/login/client/create-order/sell',params)
    }      
    else
      return this.http.post('https://group16-banking-app.herokuapp.com/login/client/create-order/buy',params) 
  }
}
