import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column()
  username: string;

  @Field({ nullable: true })
  @Column()
  password: string

  @Field({ nullable: true })
  @Column()
  email: string

  @Field({ nullable: true })
  @Column()
  status: string

  @Field()
  @Column({ name: 'created_at' })
  createdAt: Date

  @Field()
  @Column({ name: 'updated_at' })
  updatedAt: Date
}
