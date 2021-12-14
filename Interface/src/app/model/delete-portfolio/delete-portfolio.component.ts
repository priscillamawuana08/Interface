import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeletePortfolioService } from 'src/app/service/delete-portfolio.service'
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-delete-portfolio',
  templateUrl: './delete-portfolio.component.html',
  styleUrls: ['./delete-portfolio.component.scss']
})
export class DeletePortfolioComponent implements OnInit {
  response:any;
  productid:string="";

  constructor(
    private DeletePortfolioService : DeletePortfolioService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  checkCredentials(){
    const params = new HttpParams()
    .set('productid', this.productid)
    this.DeletePortfolioService.checkDetails(params).subscribe(
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
