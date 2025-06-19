var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Check } from 'typeorm';
import 'reflect-metadata';
import { Order } from './order.js';
import { ProductDirectory } from './product-directory.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let OrderItem = class OrderItem {
    id;
    orderId;
    order;
    productId;
    product;
    quantity;
    price;
    constructor(data) {
        if (data) {
            this.orderId = data.orderId;
            this.productId = data.productId;
            this.quantity = data.quantity;
            this.price = data.price;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'order_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "orderId", void 0);
__decorate([
    Field(),
    ManyToOne(() => Order),
    JoinColumn({
        name: 'order_id'
    }),
    __metadata("design:type", Order)
], OrderItem.prototype, "order", void 0);
__decorate([
    Field(),
    Column({
        name: 'product_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "productId", void 0);
__decorate([
    Field(),
    ManyToOne(() => ProductDirectory),
    JoinColumn({
        name: 'product_id'
    }),
    __metadata("design:type", ProductDirectory)
], OrderItem.prototype, "product", void 0);
__decorate([
    Field(),
    Column({
        type: 'int',
        nullable: false
    }),
    Check('positive_quantity', 'quantity > 0'),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    Field(),
    Column({
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: false
    }),
    Check('positive_price', 'price > 0'),
    __metadata("design:type", Number)
], OrderItem.prototype, "price", void 0);
OrderItem = __decorate([
    ObjectType(),
    Entity({ name: 'order_items' }),
    __metadata("design:paramtypes", [Object])
], OrderItem);
export { OrderItem };
