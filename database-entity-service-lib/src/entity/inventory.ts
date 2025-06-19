import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Check } from 'typeorm';
import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { ProductDirectory } from './product-directory.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'inventory' })
export class Inventory {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    name: 'trading_point_id',
    type: 'int',
    nullable: false
  })
  tradingPointId!: number;

  @Field()
  @ManyToOne(() => TradingPoint)
  @JoinColumn({
    name: 'trading_point_id'
  })
  tradingPoint!: TradingPoint;

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
  @Column({ type: 'int', nullable: false, default: 0 })
  quantity!: number;

  @Field()
  @Column({
    name: 'selling_price',
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: false
  })
  @Check('positive_selling_price', 'selling_price > 0')
  sellingPrice!: number;

  @Field()
  @Column({
    name: 'last_update',
    type: 'timestamp',
    default: () => 'CURRENT_DATE'
  })
  lastUpdate!: Date;
  
  constructor(data?: {
    tradingPointId: number;
    productId: number;
    quantity?: number;
    sellingPrice: number;
  }) {
    if (data) {
      this.tradingPointId = data.tradingPointId;
      this.productId = data.productId;
      this.quantity = data.quantity || 0;
      this.sellingPrice = data.sellingPrice;
      this.lastUpdate = new Date();
    }
  }
}