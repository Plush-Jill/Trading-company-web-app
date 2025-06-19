import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { Employee } from './employee.js';
import { PRODUCT_REQUEST_STATUS_ENUM_NAME, ProductRequestStatus } from './enum/product-request-status.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'product_requests' })
export class ProductRequest {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @ManyToOne(() => TradingPoint, { nullable: false })
  @JoinColumn({
    name: 'trading_point_id',
    referencedColumnName: 'id'
  })
  tradingPoint!: TradingPoint;

  @Field()
  @ManyToOne(() => Employee)
  @JoinColumn({
    name: 'employee_id',
    referencedColumnName: 'id'
  })
  employee!: Employee;

  @Field()
  @Column({
    name: 'request_date',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_DATE'
  })
  requestDate?: Date;

  @Field()
  @Column({
    name: 'status',
    type: 'enum',
    enum: ProductRequestStatus,
    enumName: PRODUCT_REQUEST_STATUS_ENUM_NAME
  })
  status!: ProductRequestStatus;

  @Field({ nullable: true })
  @Column({
    name: 'notes',
    type: 'text',
    default: '',
    nullable: true
  })
  notes?: boolean;

  constructor(data?: {
    tradingPoint: TradingPoint;
    employee: Employee;
    requestDate?: Date;
    status?: ProductRequestStatus;
  }) {
    if (data) {
      this.tradingPoint = data.tradingPoint;
      this.employee = data.employee;
      this.requestDate = data.requestDate ?? new Date();
      this.status = data.status ?? ProductRequestStatus.New;
    }
  }
}