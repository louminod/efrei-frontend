import {Component, OnInit} from '@angular/core';
import User from "../../dist-typings/models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  me: User;

  constructor(activatedRoute: ActivatedRoute) {
    this.me = activatedRoute.snapshot.data.me;
  }

  ngOnInit(): void {
  }

}
