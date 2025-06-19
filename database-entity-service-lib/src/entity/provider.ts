import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import 'reflect-metadata';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'providers' })
export class Provider {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    name: 'name',
    type: 'varchar',
    length: 100
  })
  name!: string;

  @Field({ nullable: true })
  @Column({
    name: 'phone',
    type: 'varchar',
    length: 20,
    nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @Column({
    name: 'email',
    type: 'varchar',
    length: 100,
    nullable: true
  })
  email?: string;

  @Field({nullable: true })
  @Column({
    type: 'text',
    nullable: true
  })
  address!: string;

  @Field()
  @Column({
    name: 'active',
    type: 'boolean',
    default: true
  })
  active!: boolean;

  @Field()
  @Column({
    name: 'registration_date',
    type: 'date',
    default: () => 'CURRENT_DATE'
  })
  registrationDate!: Date;

  constructor(data?: {
    name: string;
    phone?: string;
    email?: string;
    active?: boolean;
    address?: string;
    registrationDate?: string;
  }) {
    if (data) {
      this.name = data.name;
      this.phone = data.phone;
      this.email = data.email;
      this.active = data.active ?? true;
      this.address = data.address ?? '';
      this.registrationDate = data.registrationDate
        ? new Date(data.registrationDate)
        : new Date();
    }
  }
}