export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
  category?: string;
}
export interface CreateExpenseInput {
  description: string;
  amount: number;
  date: string;
  category?: string;
}
export interface ExpenseResponse {
  expenses: Expense[];
}
export interface CreateExpenseResponse {
  createExpense: Expense;
}
