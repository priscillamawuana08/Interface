import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainDashboardRoutingModule} from './main-dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard.component';

@NgModule({
    imports: [
      CommonModule,
      MainDashboardRoutingModule
    ],
    declarations: [MainDashboardComponent]
  })
  export class MainDashboardModule { }