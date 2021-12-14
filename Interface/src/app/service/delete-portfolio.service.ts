import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {param } from 'jquery'; 

@Injectable({
  providedIn: 'root'
})
export class DeletePortfolioService {

  constructor(
    private http:HttpClient
  ) { }

  checkDetails(params:any){
    return this.http.post('',params)
  }
}
