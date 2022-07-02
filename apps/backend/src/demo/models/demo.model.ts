import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Demo {
  @Field()
  message: string;
}
