import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import 'reflect-metadata';
import { Employee } from './employee.js';
import { TradingPointHall } from './trading-point-hall.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'halls_assignment' })
export class HallAssignment {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @ManyToOne(() => Employee)
  @JoinColumn({
    name: 'employee_id',
    referencedColumnName: 'id'
  })
  employeeId!: Employee;

  @Field()
  @ManyToOne(() => TradingPointHall)
  @JoinColumn({
    name: 'hall_id',
    referencedColumnName: 'id'
  })
  hallId!: TradingPointHall;

  constructor(data?: {
    employeeId: Employee,
    hallId: TradingPointHall
  }) {
    if (data) {
      this.employeeId = data.employeeId;
      this.hallId = data.hallId;
    }
  }
}