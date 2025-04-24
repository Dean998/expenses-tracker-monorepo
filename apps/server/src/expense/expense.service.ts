import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateExpenseInput } from './expense.input';
import { Expense } from '@prisma/client';

@Injectable()
export class ExpenseService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Expense[]> {
    return this.prisma.expense.findMany();
  }

  create(createExpenseInput: CreateExpenseInput): Promise<Expense> {
    return this.prisma.expense.create({
      data: createExpenseInput,
      
    });
  }
}
