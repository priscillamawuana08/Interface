import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  response:any;
  username:string="";
  productname:string="";
  quantity:string="";
  amount:string="";
  trade:string="";
 
  


  constructor(
    private orderService : OrderService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  checkCredentials(){
    const params = new HttpParams()
    .set('username', this.username)
    .set('productname', this.productname)
    .set("quantity",this.quantity)
    .set("amount",this.amount)
    .set("trade",this.trade);
     this.orderService.checkDetails(params).subscribe(
       success=>{
         alert("Order successful")
         console.log(success)
       },
       error =>{
          this.response = error;
        
         console.log(error)
       }
     )
  }
}
