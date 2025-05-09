import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.model';
import { CreateExpenseInput } from './expense.input';

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private expenseService: ExpenseService) {}

  @Query(() => [Expense])
  expenses(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Mutation(() => Expense)
  createExpense(
    @Args('createExpenseInput') createExpenseInput: CreateExpenseInput,
  ): Promise<Expense> {
    return this.expenseService.create(createExpenseInput);
  }

  @Mutation(() => Expense)
  async deleteExpense(@Args('id') id: string): Promise<Expense> {
    return this.expenseService.delete(id);
  }

  @Mutation(() => Expense)
  async updateExpense(
    @Args('id') id: string,
    @Args('updateExpenseInput') updateExpenseInput: CreateExpenseInput,
  ): Promise<Expense> {
    return this.expenseService.update(id, updateExpenseInput);
  }
}
