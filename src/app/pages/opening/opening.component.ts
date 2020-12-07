import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IInputWithError} from "./interfaces/IInputWithError";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'film-and-series-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private FORM_BUILDER: FormBuilder, private LOGIN_SERVICE: LoginService) { }

  ngOnInit(): void {
    this.LOGIN_SERVICE.autoLogin();
    this.loginForm = this.FORM_BUILDER.group({
      email: this.FORM_BUILDER.control(
        null,
        [
          Validators.required,
          Validators.email
        ]
      ),
      password: this.FORM_BUILDER.control(
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('[\\d\\S]+')
        ]
      )
    });
  }

  get EmailWithError(): IInputWithError {
    return {
      control: this.loginForm.get('email'),
      errors: [
        {
          validation: this.loginForm.get('email').hasError('email') && this.loginForm.get('email').touched,
          message: 'Nem megfelelő email formátum!'
        },
        {
          validation: this.loginForm.get('email').hasError('required') && this.loginForm.get('email').touched,
          message: 'Kötelező mező!'
        }
      ]
    };
  }
  get PasswordWithError() {
    return {
      control: this.loginForm.get('password'),
      errors: [
        {
          validation: this.loginForm.get('password').hasError('minLength') && this.loginForm.get('password').touched,
          message: 'A megadott jelszó túl rövid!'
        },
        {
          validation: this.loginForm.get('password').hasError('required') && this.loginForm.get('password').touched,
          message: 'Kötelező mező!'
        },
        {
          validation: this.loginForm.get('password').hasError('pattern') && this.loginForm.get('password').dirty,
          message: 'A jelszavad nem felel meg a minőségi stenderdnek!'
        }
      ]
    };
  }

  login() {
    this.LOGIN_SERVICE.manualLogin(this.EmailWithError.control.value);
  }

}
