import { gql } from 'apollo-angular';

export const openBox = gql`
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
