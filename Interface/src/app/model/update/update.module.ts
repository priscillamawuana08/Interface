import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    UpdateRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [UpdateComponent]
})
export class UpdateModule { }