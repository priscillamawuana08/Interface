import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './model/dashboard/main-dashboard/main-dashboard.component';
import { LoginComponent } from './model/login/login.component';
import { RegisterComponent } from './model/register/register.component';
import { OrderComponent } from './model/order/order.component';

const routes: Routes = [
      {path: '', redirectTo:'login', pathMatch:'full' },
      { path: 'login', component:LoginComponent },
      { path: 'register', component:RegisterComponent },
      // { path: 'main-dashboard', component:MainDashboardComponent },
      
      { path: 'main-dashboard',
       loadChildren:() => import('./model/dashboard/main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule)
      },


      {
        path: 'order',
        loadChildren: () => import('./model/order/order.module').then(m => m.OrderModule)
      },

      {
        path: 'update',
        loadChildren: () => import('./model/update/update.module').then(m => m.UpdateModule)
      },

      {
        path: 'portfolio',
        loadChildren: () => import('./model/portfolio/portfolio.module').then(m => m.PortfolioModule)
      },

      {
        path: 'delete',
        loadChildren: () => import('./model/delete/delete.module').then(m => m.DeleteModule)
      },

      {
        path: 'update-portfolio',
        loadChildren: () => import('./model/update-portfolio/update-portfolio.module').then(m => m.UpdatePortfolioModule)
      },

      {
        path: 'delete-portfolio',
        loadChildren: () => import('./model/delete-portfolio/delete-portfolio.module').then(m => m.DeletePortfolioModule )
      },

      {
        path: 'check-status',
        loadChildren: () => import('./model/check-status/check-status.module').then(m => m.CheckStatusModule)
      }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
