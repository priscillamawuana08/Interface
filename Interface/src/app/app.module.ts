import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './model/login/login.component';
import { RegisterComponent } from './model/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
// import { OrderComponent } from './model/order/order.component';
import { MainDashboardComponent } from './model/dashboard/main-dashboard/main-dashboard.component';
import { HeaderComponent } from './model/dashboard/layout/header/header.component';
import { FooterComponent } from './model/dashboard/layout/footer/footer.component';
import { SidebarComponent } from './model/dashboard/layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { ApiServiceService } from './service/api-service.service';
// import { ProductsComponent } from './model/products/products.component';
// import { CustomersComponent } from './model/customers/customers.component';

// import {NgxSpinnerModule} from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // OrderComponent,
    MainDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    // ProductsComponent,
    // CustomersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule , 
    MatCardModule,
    MatSidenavModule, 
    MatMenuModule,
    MatDividerModule, 
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    BrowserAnimationsModule,
    // NgxSpinnerModule,
    
  ],
  providers: [LoginService,RegisterService,ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
