import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field()
  id: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  author: string

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  content: string

  @Field({ nullable: true })
  status: string

  @Field({ nullable: true })
  parent: string
}
