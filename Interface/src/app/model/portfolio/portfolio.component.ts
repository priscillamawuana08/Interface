import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  response:any;
  productname:string="";
  quantity:string="";
  

  constructor(
    private PortfolioService : PortfolioService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  checkCredentials(){
    const params = new HttpParams()
    .set('productname', this.productname)
    .set("quantity",this.quantity)
    this.PortfolioService.checkDetails(params).subscribe(
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
