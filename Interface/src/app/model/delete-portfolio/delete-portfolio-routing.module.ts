import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletePortfolioComponent } from './delete-portfolio.component';

const routes: Routes = [
    {
      path: '',
      component: DeletePortfolioComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DeletePortfolioRoutingModule { }