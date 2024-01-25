import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor( private _Router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
 if(localStorage.getItem("userToken") !==null){
  return true
 }else{
  this._Router.navigate(['/login'])
  return false;
 }
  }
}

// export const authGuard: CanActivateFn = (route, state) => {

//   return true;
// };
