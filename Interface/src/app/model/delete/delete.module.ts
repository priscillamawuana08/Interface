import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';
import { DeleteRoutingModule } from './delete-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    DeleteRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [DeleteComponent]
})
export class DeleteModule { }