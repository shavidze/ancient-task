import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  login() {
    window.location.href = `https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200`;
  }
}
