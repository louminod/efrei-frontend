import {Component, OnInit} from '@angular/core';
import User from "../../dist-typings/models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  me: User;

  constructor(activatedRoute: ActivatedRoute) {
    this.me = activatedRoute.snapshot.data.me;
  }
}
