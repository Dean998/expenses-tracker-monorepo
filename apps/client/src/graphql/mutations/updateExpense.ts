import { gql } from "@apollo/client";

export const UPDATE_EXPENSE = gql`
  mutation UpdateExpense($id: String!, $updateExpenseInput: CreateExpenseInput!) {
    updateExpense(id: $id, updateExpenseInput: $updateExpenseInput) {
      id
      description
      amount
      date
      category
    }
  }
`;
