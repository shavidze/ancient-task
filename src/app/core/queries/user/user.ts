import { gql } from 'apollo-angular';

export const getCurrentUser = gql`
  {
    currentUser {
      id
      name
      wallets {
        id
        amount
        currency
      }
    }
  }
`;
export default { getCurrentUser };
