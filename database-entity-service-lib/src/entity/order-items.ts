import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Check } from 'typeorm';
import 'reflect-metadata';
import { Order } from './order.js';
import { ProductDirectory } from './product-directory.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'order_items' })
export class OrderItem {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    name: 'order_id',
    type: 'int',
    nullable: false
  })
  orderId!: number;

  @Field()
  @ManyToOne(() => Order)
  @JoinColumn({
    name: 'order_id'
  })
  order!: Order;

  @Field()
  @Column({
    name: 'product_id',
    type: 'int',
    nullable: false
  })
  productId!: number;

  @Field()
  @ManyToOne(() => ProductDirectory)
  @JoinColumn({
    name: 'product_id'
  })
  product!: ProductDirectory;

  @Field()
  @Column({
    type: 'int',
    nullable: false
  })
  @Check('positive_quantity', 'quantity > 0')
  quantity!: number;

  @Field()
  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: false
  })
  @Check('positive_price', 'price > 0')
  price!: number;
  
  constructor(data?: {
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
  }) {
    if (data) {
      this.orderId = data.orderId;
      this.productId = data.productId;
      this.quantity = data.quantity;
      this.price = data.price;
    }
  }
}