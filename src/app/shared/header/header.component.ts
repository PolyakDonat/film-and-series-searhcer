import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'film-and-series-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public LOGIN_SERVICE: LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this.LOGIN_SERVICE.logout();
  }
}
