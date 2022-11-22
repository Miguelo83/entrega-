import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShearchRoutingModule } from './shearch-routing.module';
import { ShearchComponent } from './shearch.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [
    ShearchComponent
  ],
  imports: [
    CommonModule,
    ShearchRoutingModule,
    MaterialModule
  ],
  exports: [
    ShearchComponent
  ]
})
export class ShearchModule { }
