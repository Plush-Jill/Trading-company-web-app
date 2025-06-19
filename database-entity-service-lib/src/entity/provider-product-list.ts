import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';

import { Provider } from './provider.js';
import { ProductDirectory } from './product-directory.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'providers_product_list' })
export class ProviderProductList {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @ManyToOne(() => Provider)
  @JoinColumn({
    name: 'provider_id',
  })
  provider!: Provider;

  @Field()
  @ManyToOne(() => ProductDirectory)
  @JoinColumn({
    name: 'product_id'
  })
  product!: ProductDirectory;

  @Field()
  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2
  })
  price!: number;

  @Field()
  @Column({
    type: 'int',
    default: 1
  })
  minOrderQuantity!: number;

  @Field()
  @Column({
    type: 'boolean',
    default: true
  })
  active!: boolean;

  @Field()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_DATE'
  })
  lastUpdate!: Date;

  constructor(data?: {
    provider: Provider;
    product: ProductDirectory;
    price: number;
    minOrderQuantity: number;
    active?: boolean;
    lastUpdate?: Date;
  }) {
    if (data) {
      this.provider = data.provider;
      this.product = data.product;
      this.price = data.price;
      this.minOrderQuantity = data.minOrderQuantity ?? 1;
      this.active = data.active ?? false;
      this.lastUpdate = data.lastUpdate
        ? new Date(data.lastUpdate)
        : new Date();
    }
  }
}