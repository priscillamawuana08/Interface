import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckStatusComponent } from './check-status.component';
import { CheckStatusRoutingModule } from './check-status-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    CheckStatusRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [CheckStatusComponent]
})
export class CheckStatusModule { }