import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  UpdatePortfolioComponent} from './update-portfolio.component';


const routes: Routes = [
  {
    path: '',
    component: UpdatePortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePortfolioRoutingModule { }