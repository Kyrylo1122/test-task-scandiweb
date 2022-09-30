import { useQuery, gql } from "@apollo/client";
const GET_ALL_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
const ALL_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        gallery
        inStock
        id
        name
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
  }
`;

const DESCRIPTION_OF_PRODUCT = gql`
  query FindProduct($id: String!) {
    product(id: $id) {
      id
      brand
      category
      gallery
      description
      name
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      attributes {
        name
        items {
          value
          displayValue
        }
      }
    }
  }
`;

export const GetDescriptionOfProduct = (id) => {
  const { error, loading, data } = useQuery(DESCRIPTION_OF_PRODUCT, {
    variables: { id },
  });
  return { error, loading, data };
};

export const GetProducts = () => {
  const { error, loading, data } = useQuery(ALL_PRODUCTS);
  return { error, loading, data };
};
export const useGetCurrencies = () => {
  const { error, loading, data } = useQuery(GET_ALL_CURRENCIES);
  return { error, loading, data };
};
