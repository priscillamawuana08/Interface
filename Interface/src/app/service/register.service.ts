import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  registerClient(playload:any){
    return this.http.post<any>("https://group16-banking-app.herokuapp.com/register-process", playload)
  }
}
