import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteService } from 'src/app/service/delete.service'
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  response:any;
  productid:string="";

  constructor(
    private DeleteService : DeleteService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  delete(){
    const params = new HttpParams()
    .set('productid', this.productid)
    this.DeleteService.checkDetails(params).subscribe(
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
