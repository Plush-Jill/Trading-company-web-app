import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';
import 'reflect-metadata';
import { TradingPointType } from './enum/trading-point-type.js';
import {Field, ID, ObjectType, GraphQLISODateTime} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'trading_points' })
export class TradingPoint {
    @Field(() => ID)
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id!: number;

    @Field()
    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    name!: string;

    @Field()
    @Column({
        type: 'enum',
        enum: TradingPointType,
    })
    type!: TradingPointType;

    @Field()
    @Column({
        type: 'text'
    })
    address!: string;

    @Field({ nullable: true })
    @Column({
        name: 'size_sqm',
        type: 'numeric',
        precision: 10,
        scale: 2,
        nullable: true
    })
    sizeSqm?: number;

    @Field({ nullable: true })
    @Column({
        name: 'rent_cost',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: true
    })
    rentCost?: number;

    @Field({ nullable: true })
    @Column({
        name: 'utility_cost',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: true })
    utilityCost?: number;

    @Field({ nullable: true })
    @Column({
        name: 'counter_count',
        type: 'int',
        nullable: true
    })
    counterCount?: number;

    @Field()
    @Column({
        name: 'floors_count',
        type: 'int',
        default: 1
    })
    floorsCount!: number;

    @Field(() => GraphQLISODateTime, { nullable: true })
    @Column({
        name: 'opening_date',
        type: 'date',
        default: () => 'CURRENT_DATE'
    })
    openingDate!: Date;

    @Field()
    @Column({
        type: 'boolean',
        default: true
    })
    active!: boolean;

    constructor(data?: {
        name: string;
        type: TradingPointType;
        address: string;
        sizeSqm?: number;
        rentCost: number;
        utilityCost: number;
        counterCount: number;
        floorsCount?: number;
        openingDate?: Date;
        active?: boolean;
    }) {
        if (data) {
            this.name = data.name;
            this.type = data.type;
            this.address = data.address;
            this.sizeSqm = data.sizeSqm;
            this.rentCost = data.rentCost;
            this.utilityCost = data.utilityCost;
            this.counterCount = data.counterCount;
            this.floorsCount = data.floorsCount ?? 1;
            this.openingDate = data.openingDate ?? new Date();
            this.active = data.active ?? true;
        }
    }
}