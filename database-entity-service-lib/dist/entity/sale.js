var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { Customer } from './customer.js';
import { Employee } from './employee.js';
import { TradingPoint } from './trading-point.js';
import { PaymentMethod } from './enum/payment-method.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let Sale = class Sale {
    id;
    tradingPointId;
    tradingPoint;
    employeeId;
    employee;
    customerId;
    customer;
    saleDate;
    totalAmount;
    paymentMethod;
    constructor(data) {
        if (data) {
            this.tradingPointId = data.tradingPointId;
            this.employeeId = data.employeeId;
            this.customerId = data.customerId;
            this.saleDate = data.saleDate || new Date();
            this.totalAmount = data.totalAmount;
            this.paymentMethod = data.paymentMethod || PaymentMethod.CASH;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Sale.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'trading_point_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Sale.prototype, "tradingPointId", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint),
    JoinColumn({
        name: 'trading_point_id'
    }),
    __metadata("design:type", TradingPoint)
], Sale.prototype, "tradingPoint", void 0);
__decorate([
    Field(),
    Column({
        name: 'employee_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Sale.prototype, "employeeId", void 0);
__decorate([
    Field(),
    ManyToOne(() => Employee),
    JoinColumn({
        name: 'employee_id'
    }),
    __metadata("design:type", Employee)
], Sale.prototype, "employee", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'customer_id',
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], Sale.prototype, "customerId", void 0);
__decorate([
    Field(),
    ManyToOne(() => Customer),
    JoinColumn({ name: 'customer_id' }),
    __metadata("design:type", Customer)
], Sale.prototype, "customer", void 0);
__decorate([
    Field(),
    Column({
        name: 'sale_date',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], Sale.prototype, "saleDate", void 0);
__decorate([
    Field(),
    Column({
        name: 'total_amount',
        type: 'numeric',
        precision: 14,
        scale: 2,
        nullable: false
    }),
    __metadata("design:type", Number)
], Sale.prototype, "totalAmount", void 0);
__decorate([
    Field(),
    Column({
        name: 'payment_method',
        type: 'enum',
        enum: PaymentMethod,
        default: PaymentMethod.CASH,
        nullable: false
    }),
    __metadata("design:type", String)
], Sale.prototype, "paymentMethod", void 0);
Sale = __decorate([
    ObjectType(),
    Entity({ name: 'sales' }),
    __metadata("design:paramtypes", [Object])
], Sale);
export { Sale };
