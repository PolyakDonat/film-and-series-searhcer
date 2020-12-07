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
      email: _email,
      loggedIn: _email !== null
    })
  }

  manualLogin(email: string) {
    if (!window.localStorage.getItem('FILM_AND_SERIES_SEARCHER_email')) {
      window.localStorage.setItem('FILM_AND_SERIES_SEARCHER_email', email);
    }
    this.updateState(email);
    if (this.loginState.value.loggedIn) {
      this.ROUTER.navigateByUrl('/searcher');
    }
  }

  autoLogin() {
    const emailFromLocalStorage = window.localStorage.getItem('FILM_AND_SERIES_SEARCHER_email');
    if (emailFromLocalStorage) {
      this.updateState(emailFromLocalStorage);
    } else {
      this.updateState(null)
    }
    if (this.loginState.value.loggedIn) {
      this.ROUTER.navigateByUrl('/searcher');
    }
  }
}
