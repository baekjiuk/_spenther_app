import {gql} from '@apollo/client';

export const USER = gql`
  query USER {
    expenditures {
      title
    }
  }
`;
