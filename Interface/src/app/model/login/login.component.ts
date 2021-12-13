import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response:any;
  username:string="";
  password:string="";
   
  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }
 

  ngOnInit(): void {
  }
 
  checkCredentials(){
    const params = new HttpParams()
    .set('username', this.username)
    .set('password', this.password);
     this.loginService.checkDetails(params).subscribe(
       success=>{
         console.log(success)
       },
       error =>{
          this.response = error;
        
         console.log(error)
       }
     )
  }
}
