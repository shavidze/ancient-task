import { Pipe, PipeTransform } from '@angular/core';
import { Wallet } from '@shared/interfaces/wallet';

@Pipe({
  name: 'walletSum',
})
export class WalletSumPipe implements PipeTransform {
  transform(value: Wallet[], ...args: unknown[]): number {
    let sum = 0;
    if (value) {
      return value.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount,
        sum
      );
    }
    return sum;
  }
}
