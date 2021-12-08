import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  dateTime = new Date();
  message:String=""
  time = this.dateTime.getHours()

  constructor() { }

  ngOnInit(): void {
    this.timeOfDay()
  }
  
  timeOfDay(){
    if(this.time >= 6 && this.time < 12){
        this.message = "Good Morning"
    }
    else if(this.time >= 12 && this.time <= 17){
        this.message = "Good Afternoon"
    }
    else if(this.time > 17 && this.time <= 23){
      this.message = "Good Evening"
    }
    else{
      this.message = "Hello"
    }
  }
}
