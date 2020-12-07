import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private LOGIN_SERVICE: LoginService, private ROUTER: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let authReturnValue = undefined;
    this.LOGIN_SERVICE.loginState.subscribe(credentials => {
      if (credentials.email === null) {
        authReturnValue = this.ROUTER.parseUrl('/login');
      } else {
        authReturnValue = true;
      }
    });
    return authReturnValue;
  }

}
