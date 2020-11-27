import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { PostMeta } from "./post-meta.entity";

@Entity()
@ObjectType()
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column()
  type: string;

  @Field({ nullable: true })
  @Column()
  name: string

  @Field({ nullable: true })
  @Column()
  author: string

  @Field({ nullable: true })
  @Column()
  title: string

  @Field({ nullable: true })
  @Column()
  content: string

  @Field({ nullable: true })
  @Column()
  status: string

  @Field({ nullable: true })
  @Column()
  parent: string

  @Field()
  @Column({ name: 'created_at' })
  createdAt: Date

  @Field()
  @Column({ name: 'updated_at' })
  updatedAt: Date

  @Field(type => [PostMeta])
  @OneToMany(type => PostMeta, postMeta => postMeta.post)
  metadata: Array<PostMeta>
}
