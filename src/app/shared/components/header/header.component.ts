import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentUser: any;
  @Input() userIsLoading: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  logout(): void {
    window.location.href = `https://api-staging.csgoroll.com/logout?redirectUri=http://localhost:4200`;
  }
}
