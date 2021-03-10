import {Component, OnInit} from '@angular/core';
import User from "../../dist-typings/models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {MeService} from "../me.service";
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  faDoorOpen = faDoorOpen;
  me: User;

  constructor(activatedRoute: ActivatedRoute, private meService: MeService, private router: Router) {
    this.me = activatedRoute.snapshot.data.me;
  }

  async logout() {
    await this.meService.logout();
    await this.router.navigateByUrl('/');
  }
}
