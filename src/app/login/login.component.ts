import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Auth$LoginParams} from "../../dist-typings/routes/auth/post.login.interfaces";
import {MeService} from "../me.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: String = "";
  login: Login = new Login();

  constructor(private router: Router, private meService: MeService) {
  }

  async submit() {
    try {
      const credentials: Auth$LoginParams = {email: this.login.email, password: this.login.password};
      await this.meService.login(credentials);
      await this.router.navigateByUrl('/profile');
    } catch (e) {
      this.error = e.error.messages[0];
    }
  }
}
