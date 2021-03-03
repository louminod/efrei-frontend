import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = new Login();

  constructor (private router: Router) {}

  async submit () {
    await this.router.navigateByUrl('/profile');
  }
}
