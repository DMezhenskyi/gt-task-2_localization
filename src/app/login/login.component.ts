import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @HostBinding('class.container') container = true;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'login': new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_]+$/),
        Validators.minLength(3)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  loginAttempt(): void {
    this.loginForm.reset();
    alert('It is just for demo.');
    console.log(this.loginForm);
  }

}
