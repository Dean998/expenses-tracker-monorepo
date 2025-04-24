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

  async delete(id: string): Promise<Expense> {
    return this.prisma.expense.delete({
      where: { id },
    });
  }

  async update(
    id: string,
    data: Partial<CreateExpenseInput>,
  ): Promise<Expense> {
    return this.prisma.expense.update({
      where: { id },
      data,
    });
  }
  async findById(id: string): Promise<Expense | null> {
    return this.prisma.expense.findUnique({
      where: { id },
    });
  }
  
}
