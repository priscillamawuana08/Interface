import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {param } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private http:HttpClient
  ) { }
  
    
  
  
  



  checkDetails(params:any){
    return this.http.post('https://group16-banking-app.herokuapp.com/login/client/create-portfolio/portfolio',params)
  }
}
