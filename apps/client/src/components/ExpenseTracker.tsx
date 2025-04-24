import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_EXPENSES,
  CREATE_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
} from "../graphql";
import { Expense } from "@expenses-tracker/shared-types/types/expenseTypes";
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  Spinner,
  Alert,
  Table,
  Field,
} from "@chakra-ui/react";

const ExpenseTracker: React.FC = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("");
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const { loading, error, data } = useQuery(GET_EXPENSES);
  const [createExpense] = useMutation(CREATE_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }],
  });
  const [deleteExpense] = useMutation(DELETE_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }],
  });
  const [updateExpense] = useMutation(UPDATE_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingExpense) {
      updateExpense({
        variables: {
          id: String(editingExpense.id),
          updateExpenseInput: {
            description,
            amount: parseFloat(amount),
            date,
            category: category || null,
          },
        },
      }).then(() => {
        setEditingExpense(null);
      });
    } else {
      createExpense({
        variables: {
          createExpenseInput: {
            description,
            amount: parseFloat(amount),
            date,
            category: category || null,
          },
        },
      }).then(() => {});
    }
    setDescription("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);
    setCategory("");
  };

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
    setDescription(expense.description);
    setAmount(expense.amount.toString());
    setDate(expense.date.split("T")[0]);
    setCategory(expense.category || "");
  };

  const handleDelete = (id: string) => {
    deleteExpense({
      variables: { id },
    }).then(() => {
      if (editingExpense && editingExpense.id === id) {
        setEditingExpense(null);
        setDescription("");
        setAmount("");
        setDate(new Date().toISOString().split("T")[0]);
        setCategory("");
      }
    });
  };

  if (loading) return <Spinner size="xl" />;
  if (error)
    return (
      <Alert.Root status="error">
        <Alert.Description>Error: {error.message}</Alert.Description>
      </Alert.Root>
    );

  return (
    <Box className="expense-tracker" p={5}>
      <Box className="expense-form-container" mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          {editingExpense ? "Edit Expense" : "Add New Expense"}
        </Heading>
        <form onSubmit={handleSubmit}>
          <Field.Root id="description" isRequired mb={4}>
            <Field.Label>Description:</Field.Label>
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </Field.Root>

          <Field.Root id="amount" isRequired mb={4}>
            <Field.Label>Amount:</Field.Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.01"
              min="0"
              placeholder="Enter amount"
            />
          </Field.Root>

          <Field.Root id="date" isRequired mb={4}>
            <Field.Label>Date:</Field.Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Field.Root>

          <Field.Root id="category" mb={4}>
            <Field.Label>Category (optional):</Field.Label>
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category (optional)"
            />
          </Field.Root>

          <Button colorScheme="teal" type="submit">
            {editingExpense ? "Update Expense" : "Add Expense"}
          </Button>
        </form>
      </Box>

      <Box className="expense-list-container">
        <Heading as="h2" size="lg" mb={4}>
          Expense List
        </Heading>
        {data.expenses.length === 0 ? (
          <Text>No expenses recorded yet.</Text>
        ) : (
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Description</Table.ColumnHeader>
                <Table.ColumnHeader>Amount</Table.ColumnHeader>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
                <Table.ColumnHeader>Category</Table.ColumnHeader>
                <Table.ColumnHeader>Actions</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.expenses.map((expense: Expense) => (
                <Table.Row key={expense.id}>
                  <Table.Cell>{expense.description}</Table.Cell>
                  <Table.Cell>£{expense.amount.toFixed(2)}</Table.Cell>
                  <Table.Cell>
                    {new Date(expense.date).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{expense.category || "-"}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => handleEdit(expense)} mr={2}>
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(expense.id)}>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        )}
      </Box>
    </Box>
  );
};

export default ExpenseTracker;
