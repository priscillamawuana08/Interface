import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  data:any;

  constructor(private apiService : ApiServiceService) { }

  ngOnInit(): void {
    this.getMarketData()
  }

  getMarketData(){
    this.apiService.getMarketData().subscribe((data:any)=>{
      this.data = data;
      console.log(data)
    })
  }

}
