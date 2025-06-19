import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { Employee } from './employee.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'department_store_sections' })
export class DepartmentStoreSection {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Field()
  @ManyToOne(() => TradingPoint, { nullable: false })
  @JoinColumn({
    name: 'trading_point_id',
    referencedColumnName: 'id'
  })
  tradingPoint!: TradingPoint;

  @Field()
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false
  })
  name!: string;

  @Field()
  @Column({
    type: 'int',
    name: 'floor_number',
    nullable: false
  })
  floorNumber!: number;

  @Field()
  @ManyToOne(() => Employee, { nullable: true })
  @JoinColumn({
    name: 'manager_id',
    referencedColumnName: 'id',
  })
  managerId?: Employee;


   constructor(data?: {
     name: string;
     tradingPoint: TradingPoint;
     floorNumber: number;
     managerId?: Employee;
  }) {
    if (data) {
      this.tradingPoint = data.tradingPoint;
      this.name = data.name;
      this.floorNumber = data.floorNumber;
      this.managerId = data.managerId;
    }
  }
}