import { gql } from 'apollo-angular';

export const openBox = (boxId: string, amount: number) => gql`
  mutation openBox($boxId: ID!, $amount: Int) {
    openBox(input: { boxId: $boxId, amount: $amount }) {
      boxOpenings {
        id
        itemValue
        itemVariantId
        itemVariant {
          id
          name
          value
          iconUrl
        }
      }
    }
  }
`;
export const getBoxById = (id: string) => {
  return gql`{
            box(id: "${id}") {
                id,
                name,
                description,
                iconUrl,
                price,
                currency,
                slots {
                    id,
                    rate,
                    itemId,
                    item {
                        id,
                        name,
                        value,
                        iconUrl
                    }
                }
            }
         }`;
};

export const getBoxes = () => {
  return gql`
    {
      boxes(openable: true, free: false, purchasable: true) {
        edges {
          node {
            id
            type
            free
            price
            currency
            name
            description
            openable
            iconUrl
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `;
};
