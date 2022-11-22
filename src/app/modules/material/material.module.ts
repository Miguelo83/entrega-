import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material modules
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
//reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//http client
import { HttpClientModule } from '@angular/common/http';
const MATERIAL_MODULES = [
  HttpClientModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }
