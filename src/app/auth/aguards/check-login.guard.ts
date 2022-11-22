import { Injectable } from '@angular/core';
import {  CanActivate} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor (
    private authSvc: AuthService,
 
  ){}
  canActivate(): Observable<boolean> {
    const isLogged = this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => isLogged)
      );
      
      
      return this.authSvc.isLogged.pipe(
        take(1),
        map((isLogged: boolean) => isLogged)
      );

    

  }
  
}
