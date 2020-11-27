import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PostType {
  @Field({ nullable: true })
  name: string;

  @Field(type => [String], { nullable: true })
  fields: Array<string>;
}
