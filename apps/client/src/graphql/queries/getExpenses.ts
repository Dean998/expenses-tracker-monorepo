import { gql } from "@apollo/client";

export const GET_EXPENSES = gql`
  query GetExpenses {
    expenses {
      id
      description
      amount
      date
      category
    }
  }
`;
