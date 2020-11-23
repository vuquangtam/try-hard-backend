import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';

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
}
