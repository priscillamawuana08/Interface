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
    return this.http.post<any>("http://127.0.0.1:4040/register-process", playload)
  }
}
