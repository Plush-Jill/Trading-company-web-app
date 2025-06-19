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
import { Provider } from './provider.js';
import { ORDER_STATUS_ENUM_NAME, OrderStatus } from './enum/order-status.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let Order = class Order {
    id;
    provider;
    orderDate;
    status;
    totalCost;
    notes;
    constructor(data) {
        if (data) {
            this.provider = data.provider;
            this.orderDate = data.orderDate ?? new Date();
            this.status = data.status ?? OrderStatus.New;
            this.notes = data.notes ?? '';
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    Field(),
    ManyToOne(() => Provider, { nullable: false }),
    JoinColumn({
        name: 'provider_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", Provider)
], Order.prototype, "provider", void 0);
__decorate([
    Field(),
    Column({
        name: 'order_date',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], Order.prototype, "orderDate", void 0);
__decorate([
    Field(),
    Column({
        name: 'status',
        type: 'enum',
        enum: OrderStatus,
        enumName: ORDER_STATUS_ENUM_NAME
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    Field(),
    Column({
        name: 'total_cost',
        type: 'numeric',
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalCost", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'notes',
        type: 'text',
        default: '',
        nullable: true
    }),
    __metadata("design:type", String)
], Order.prototype, "notes", void 0);
Order = __decorate([
    ObjectType(),
    Entity({ name: 'orders' }),
    __metadata("design:paramtypes", [Object])
], Order);
export { Order };
