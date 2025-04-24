import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import "./ExpenseTracker.css";

const GET_EXPENSES = gql`
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

const CREATE_EXPENSE = gql`
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

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
  category?: string;
}

const ExpenseTracker: React.FC = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("");

  const { loading, error, data } = useQuery(GET_EXPENSES);
  const [createExpense] = useMutation(CREATE_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createExpense({
      variables: {
        createExpenseInput: {
          description,
          amount: parseFloat(amount),
          date,
          category: category || null,
        },
      },
    });
    setDescription("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);
    setCategory("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="expense-tracker">
      <div className="expense-form-container">
        <h2>Add New Expense</h2>
        <form onSubmit={handleSubmit} className="expense-form">
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category (optional):</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Expense
          </button>
        </form>
      </div>

      <div className="expense-list-container">
        <h2>Expense List</h2>
        {data.expenses.length === 0 ? (
          <p>No expenses recorded yet.</p>
        ) : (
          <table className="expense-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {data.expenses.map((expense: Expense) => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>£{expense.amount.toFixed(2)}</td>
                  <td>{new Date(expense.date).toLocaleDateString()}</td>
                  <td>{expense.category || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;
