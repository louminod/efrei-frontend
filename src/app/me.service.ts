import {Injectable} from '@angular/core';
import {Auth$LoginParams} from "../dist-typings/routes/auth/post.login.interfaces";
import {HttpClient} from "@angular/common/http";
import User from "../dist-typings/models/user";

@Injectable({
  providedIn: 'root'
})
export class MeService {

  private me: User | undefined;

  constructor(private http: HttpClient) {
  }

  async resolve() {
    if (this.me === undefined) {
      this.me = await this.http.get('https://backend.thomas-veillard.fr/api/users/me').toPromise() as User;
    }
    return this.me;
  }

  async login(credentials: Auth$LoginParams) {
    const headers = {'content-type': 'application/json'};
    await this.http.post('https://backend.thomas-veillard.fr/auth/login', credentials, {'headers': headers}).toPromise();
  }

  async logout() {
    await this.http.delete('https://backend.thomas-veillard.fr/auth/logout').toPromise();
    this.me = undefined;
  }
}
