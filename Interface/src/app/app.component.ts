import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Interface';
  hide = true;
  sideBarOpen = true;

  ngOnInit(){}

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
