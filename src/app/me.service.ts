import {Injectable} from '@angular/core';
import {Auth$LoginParams} from "../dist-typings/routes/auth/post.login.interfaces";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import User from "../dist-typings/models/user";

@Injectable({
  providedIn: 'root'
})
export class MeService {

  private me: User | null | undefined;

  constructor(private http: HttpClient) {
  }

  async resolve() {
    if (typeof this.me !== 'undefined') return this.me;

    try {
      this.me = await this.http.get('https://backend.thomas-veillard.fr/api/users/me', {withCredentials: true}).toPromise() as User;
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === 403) this.me = null;
      else throw err;
    }
    return this.me;
  }

  async login(credentials: Auth$LoginParams) {
    const headers = {'content-type': 'application/json'};
    await this.http.post('https://backend.thomas-veillard.fr/auth/login', credentials, {
      'headers': headers,
      withCredentials: true
    }).toPromise();
    this.me = undefined;
  }

  async logout() {
    const headers = {'content-type': 'application/json'};
    await this.http.delete('https://backend.thomas-veillard.fr/auth/logout', {
      'headers': headers,
      withCredentials: true
    }).toPromise();
    this.me = undefined;
  }
}
