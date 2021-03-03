import {Component, OnInit} from '@angular/core';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = new Login();

  submit() {
    window.alert(`email: '${this.login.email}', password: '${this.login.password}'`);
  }
}
