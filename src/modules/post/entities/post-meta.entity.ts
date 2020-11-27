import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from "./post.entity";

@Entity()
@ObjectType()
export class PostMeta {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(type => Post)
  @ManyToOne(type => Post, post => post.metadata)
  post: Post;

  @Field()
  @Column()
  key: string

  @Field({ nullable: true })
  @Column()
  value: string
}
