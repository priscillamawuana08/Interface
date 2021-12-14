import { Component, OnInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
import { RegisterService } from 'src/app/service/register.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fieldTextType: boolean = false;
  response: any = [];
  first_name: string = "";
  last_name: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  confirm_password = "";
  accountBal="";
  isError = false;
  isSuccess = false;
  alert_message: String = "";
  

  constructor(
    private registration: RegisterService,
    //  private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


  registerClient() {
    if (this.password != this.confirm_password) {
      this.isError = true;
      this.alert_message = "Passwords do not match"
      this.Alert();
      setTimeout(() => {
        this.isError = false;
      }, 4000);
      return;
    }
    const payload = {
      "firstName": this.first_name,
      "lastName": this.last_name,
      "email": this.email,
      "password": this.password,
      "accountBal": this.accountBal
    }
    this.registration.registerClient(payload).subscribe({
      complete: () => { console.log()},
      error: (errors:any) => { 
         this.response = errors
        console.log(errors)
          this.errorAlert()
          this.clearError()
          } 
    }
    )
    localStorage.setItem("email", this.email);
  
  }


  Alert() {
    window.setTimeout(function () {
      $(".alert").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
      });
    }, 2000);
  }

  errorAlert() {    
    if (this.response.status != 200) {
      this.alert_message = this.response.name
      this.isError = true;
     this.Alert()
    }
    
  }

  clearError(){
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}


