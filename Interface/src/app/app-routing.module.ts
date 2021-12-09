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
      { path: 'main-dashboard', component:MainDashboardComponent },

      {
        path: 'order',
        loadChildren: () => import('./model/order/order.module').then(m => m.OrderModule)
      },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
