import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { Provider } from './provider.js';
import { ORDER_STATUS_ENUM_NAME, OrderStatus } from './enum/order-status.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'orders' })
export class Order {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @ManyToOne(() => Provider, { nullable: false })
  @JoinColumn({
    name: 'provider_id',
    referencedColumnName: 'id'
  })
  provider!: Provider;

  @Field()
  @Column({
    name: 'order_date',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_DATE'
  })
  orderDate?: Date;

  @Field()
  @Column({
    name: 'status',
    type: 'enum',
    enum: OrderStatus,
    enumName: ORDER_STATUS_ENUM_NAME
  })
  status!: OrderStatus;

  @Field()
  @Column({
    name: 'total_cost',
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  totalCost!: number;

  @Field({ nullable: true })
  @Column({
    name: 'notes',
    type: 'text',
    default: '',
    nullable: true
  })
  notes?: string;

  constructor(data?: {
    provider: Provider;
    orderDate?: Date;
    status?: OrderStatus;
    totalCost?: number;
    notes?: string;
  }) {
    if (data) {
      this.provider = data.provider;
      this.orderDate = data.orderDate ?? new Date();
      this.status = data.status ?? OrderStatus.New;
      this.notes = data.notes ?? '';
    }
  }
}