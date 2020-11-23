import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  type: string;

  @Field()
  name: string

  @Field()
  author: string

  @Field()
  title: string

  @Field()
  content: string

  @Field()
  status: string

  @Field()
  parent: string
}