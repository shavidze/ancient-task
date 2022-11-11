import { gql } from 'apollo-angular';

export const walletUpdate = gql`
  subscription {
    OnUpdateWallet {
      updateWallet {
        wallet {
          id
          amount
          name
        }
      }
    }
  }
`;
export default { walletUpdate };
