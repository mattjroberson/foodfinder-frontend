import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { EditableCastPipe, ButtonCastPipe } from './schemaCast.pipe';

//Angular Material Imports
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    EditableCastPipe,
    ButtonCastPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports:[TableComponent]
})
export class DynamicTableModule { }
