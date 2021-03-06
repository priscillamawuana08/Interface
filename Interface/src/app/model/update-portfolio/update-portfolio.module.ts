import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePortfolioComponent } from './update-portfolio.component';
import { UpdatePortfolioRoutingModule } from './update-portfolio-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    UpdatePortfolioRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [UpdatePortfolioComponent]
})
export class UpdatePortfolioModule { }