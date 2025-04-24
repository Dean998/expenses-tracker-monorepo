import { Field, InputType, Float } from '@nestjs/graphql';

@InputType()
export class CreateExpenseInput {
  @Field()
  description: string;

  @Field(() => Float)
  amount: number;

  @Field()
  date: string;

  @Field({ nullable: true })
  category?: string;
}
