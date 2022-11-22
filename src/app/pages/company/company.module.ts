import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    CompanyComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule

  ]
})
export class CompanyModule { }
