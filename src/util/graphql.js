import gql from 'graphql-tag';

export const FETCH_PRODUCTS_QUERY = gql`
  {
    getProducts {
      id
      title
      description
      createdAt
      images
      username
      category
      creator
      region
    }
  }
`;
