import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShearchComponent } from './shearch.component';

const routes: Routes = [{ path: '', component: ShearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShearchRoutingModule { }
