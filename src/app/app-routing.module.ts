import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './auth/aguards/check-login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'shearch', loadChildren: () => import('./pages/shearch/shearch.module').then(m => m.ShearchModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [CheckLoginGuard] },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'company', loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule), canActivate: [CheckLoginGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
