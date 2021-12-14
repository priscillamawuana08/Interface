import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdatePortfolioService } from 'src/app/service/update-portfolio.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.scss']
})
export class UpdatePortfolioComponent implements OnInit {
  response:any;
  productname:string="";
  quantity:string="";

  constructor(
    private UpdatePortfolioService : UpdatePortfolioService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  checkCredentials(){
    const params = new HttpParams()
    .set('productname', this.productname)
    .set("quantity",this.quantity);
     this.UpdatePortfolioService.checkDetails(params).subscribe(
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
