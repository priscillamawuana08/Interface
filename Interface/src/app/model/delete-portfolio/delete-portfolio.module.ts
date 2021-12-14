import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePortfolioComponent } from './delete-portfolio.component';
import { DeletePortfolioRoutingModule } from './delete-portfolio-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
      CommonModule,
      DeletePortfolioRoutingModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    ],
    declarations: [DeletePortfolioComponent ]
  })
  export class DeletePortfolioModule { }