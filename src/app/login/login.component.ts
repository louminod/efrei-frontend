import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Auth$LoginParams} from "../../dist-typings/routes/auth/post.login.interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: String = "";
  login: Login = new Login();

  constructor(private router: Router, private http: HttpClient) {
  }

  async submit() {
    try {
      const headers = {'content-type': 'application/json'};
      // const body = JSON.stringify(this.login);
      const body: Auth$LoginParams = {email: this.login.email, password: this.login.password};
      await this.http.post('https://backend.thomas-veillard.fr/auth/login', body, {'headers': headers}).toPromise();
      await this.router.navigateByUrl('/profile');
    } catch (e) {
      this.error = e.error.messages[0];
    }
  }
}
