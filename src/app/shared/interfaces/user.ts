import { Wallet } from '@shared/interfaces/wallet';

export interface IUser {
  id: string;
  name: string;
  wallets: Wallet[];
}
