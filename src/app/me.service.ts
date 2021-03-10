import {Injectable} from '@angular/core';
import {Auth$LoginParams} from "../dist-typings/routes/auth/post.login.interfaces";
import {HttpClient} from "@angular/common/http";
import User from "../dist-typings/models/user";

@Injectable({
  providedIn: 'root'
})
export class MeService {

  private me: User | undefined;

  constructor(private httpClient: HttpClient) {
  }

  async resolve() {
    if (this.me === undefined) {
      this.me = await this.httpClient.get('https://backend.thomas-veillard.fr/api/users/me').toPromise() as User;
    }
    return this.me;
  }

  async login(credentials: Auth$LoginParams) {
    await this.httpClient.post('https://backend.thomas-veillard.fr/auth/login', credentials).toPromise();
  }

  async logout() {
    await this.httpClient.delete('https://backend.thomas-veillard.fr/auth/logout').toPromise();
    this.me = undefined;
  }
}
