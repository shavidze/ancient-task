import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { FetchResult } from '@apollo/client/core';
import { Wallet, WalletResponse } from '@shared/interfaces/wallet';
import { walletUpdate } from '@core/queries/wallet/wallet';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor(private apollo: Apollo) {}
  walletUpdateSubscription(): Observable<FetchResult<WalletResponse>> {
    return this.apollo.subscribe<WalletResponse>({
      query: walletUpdate,
    });
  }
}
