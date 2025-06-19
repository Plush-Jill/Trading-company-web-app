import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'customers' })
export class Customer {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    name: 'full_name',
    type: 'varchar',
    nullable: false,
  })
  fullName!: string;

  @Field({ nullable: true })
  @Column({
    name: 'phone_number',
    type: 'varchar',
    nullable: true,
  })
  phoneNumber?: string;

  @Field()
  @Column({
    name: 'registration_date',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_DATE'
  })
  registrationDate?: string;

  @Field({ nullable: true })
  @Column({
    name: 'birthday',
    type: 'date',
    nullable: true,
  })
  birthday?: string;

  @Field({ nullable: true })
  @Column({
    name: 'notes',
    type: 'text',
    nullable: true,
  })
  notes?: string;

  constructor(data?: {
    fullName: string;
    phoneNumber?: string;
    registrationDate?: string;
    birthday?: string;
    notes?: string;
  }) {
    if (data) {
      this.fullName = data.fullName;
      this.phoneNumber = data.phoneNumber;
      this.registrationDate = data.registrationDate;
      this.birthday = data.birthday;
      this.notes = data.notes;
    }
  }
}
