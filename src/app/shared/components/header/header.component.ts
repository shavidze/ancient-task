import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { WalletService } from '@core/services/wallet.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentUser: any;
  @Input() userIsLoading: boolean = false;
  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.walletService.walletUpdateSubscription().subscribe({
      next: (res: any) => console.log('updated', res),
      error: error => console.log('err', error),
      complete: () => console.log('complete'),
    });
  }
  logout(): void {
    window.location.href = `https://api-staging.csgoroll.com/logout?redirectUri=http://localhost:4200`;
  }
}
