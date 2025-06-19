import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Check } from 'typeorm';
import 'reflect-metadata';
import { Sale } from './sale.js';
import { ProductDirectory } from './product-directory.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'sale_items' })
export class SaleItem {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({
        name: 'sale_id',
        type: 'int',
        nullable: false
    })
    saleId!: number;

    @Field()
    @ManyToOne(() => Sale)
    @JoinColumn({
        name: 'sale_id'
    })
    sale!: Sale;

    @Field()
    @Column({
        name: 'product_id',
        type: 'int',
        nullable: false
    })
    productId!: number;

    @Field()
    @ManyToOne(() => ProductDirectory)
    @JoinColumn({ name: 'product_id' })
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
        saleId: number;
        productId: number;
        quantity: number;
        price: number;
    }) {
        if (data) {
            this.saleId = data.saleId;
            this.productId = data.productId;
            this.quantity = data.quantity;
            this.price = data.price;
        }
    }
}