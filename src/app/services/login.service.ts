import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ILoginState} from "./interfaces/ILoginState";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginState: BehaviorSubject<ILoginState> = new BehaviorSubject<ILoginState>({
    email: null,
    loggedIn: false
  });

  constructor(private ROUTER: Router) { }

  private updateState(_email: string) {
    this.loginState.next({
      email: _email === 'null' ? null : _email,
      loggedIn: _email !== null
    })
  }

  manualLogin(email: string) {
    window.localStorage.setItem('FILM_AND_SERIES_SEARCHER_email', email);
    this.updateState(email);
    if (this.loginState.value.loggedIn) {
      this.ROUTER.navigateByUrl('/searcher');
    }
  }

  autoLogin() {
    const emailFromLocalStorage = window.localStorage.getItem('FILM_AND_SERIES_SEARCHER_email');
    if (emailFromLocalStorage !== 'null') {
      this.updateState(emailFromLocalStorage);
    }
    if (this.loginState.value.loggedIn) {
      this.ROUTER.navigateByUrl('/searcher');
    }
  }

  logout() {
    this.updateState(null);
    window.localStorage.setItem('FILM_AND_SERIES_SEARCHER_email', null);
    this.ROUTER.navigateByUrl('/login');
  }
}
