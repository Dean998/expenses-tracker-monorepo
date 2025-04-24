import { Field, ID, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class Expense {
  @Field(() => ID)
  id: string;

  @Field()
  description: string;

  @Field(() => Float)
  amount: number;

  @Field()
  date: string;

  @Field({ nullable: true })
  category?: string;
}
