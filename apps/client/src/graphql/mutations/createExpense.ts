import { gql } from "@apollo/client";

export const CREATE_EXPENSE = gql`
  mutation CreateExpense($createExpenseInput: CreateExpenseInput!) {
    createExpense(createExpenseInput: $createExpenseInput) {
      id
      description
      amount
      date
      category
    }
  }
`;
