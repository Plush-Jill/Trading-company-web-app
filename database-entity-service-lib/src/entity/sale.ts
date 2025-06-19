import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { Customer } from './customer.js';
import { Employee } from './employee.js';
import { TradingPoint } from './trading-point.js';
import { PaymentMethod } from './enum/payment-method.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'sales' })
export class Sale {
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
        name: 'employee_id',
        type: 'int',
        nullable: false
    })
    employeeId!: number;

    @Field()
    @ManyToOne(() => Employee)
    @JoinColumn({
        name: 'employee_id'
    })
    employee!: Employee;

    @Field({ nullable: true })
    @Column({
        name: 'customer_id',
        type: 'int',
        nullable: true
    })
    customerId?: number;

    @Field()
    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customer_id' })
    customer?: Customer;

    @Field()
    @Column({
        name: 'sale_date',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_DATE'
    })
    saleDate!: Date;

    @Field()
    @Column({
        name: 'total_amount',
        type: 'numeric',
        precision: 14,
        scale: 2,
        nullable: false
    })
    totalAmount!: number;

    @Field()
    @Column({
        name: 'payment_method',
        type: 'enum',
        enum: PaymentMethod,
        default: PaymentMethod.CASH,
        nullable: false
    })
    paymentMethod!: PaymentMethod;

    constructor(data?: {
        tradingPointId: number;
        employeeId: number;
        customerId?: number;
        saleDate?: Date;
        totalAmount: number;
        paymentMethod?: PaymentMethod;
    }) {
        if (data) {
            this.tradingPointId = data.tradingPointId;
            this.employeeId = data.employeeId;
            this.customerId = data.customerId;
            this.saleDate = data.saleDate || new Date();
            this.totalAmount = data.totalAmount;
            this.paymentMethod = data.paymentMethod || PaymentMethod.CASH;
        }
    }
}