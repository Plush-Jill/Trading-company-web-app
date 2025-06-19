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
import { Sale } from './sale.js';
import { ProductDirectory } from './product-directory.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let SaleItem = class SaleItem {
    id;
    saleId;
    sale;
    productId;
    product;
    quantity;
    price;
    constructor(data) {
        if (data) {
            this.saleId = data.saleId;
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
], SaleItem.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'sale_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], SaleItem.prototype, "saleId", void 0);
__decorate([
    Field(),
    ManyToOne(() => Sale),
    JoinColumn({
        name: 'sale_id'
    }),
    __metadata("design:type", Sale)
], SaleItem.prototype, "sale", void 0);
__decorate([
    Field(),
    Column({
        name: 'product_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], SaleItem.prototype, "productId", void 0);
__decorate([
    Field(),
    ManyToOne(() => ProductDirectory),
    JoinColumn({ name: 'product_id' }),
    __metadata("design:type", ProductDirectory)
], SaleItem.prototype, "product", void 0);
__decorate([
    Field(),
    Column({
        type: 'int',
        nullable: false
    }),
    Check('positive_quantity', 'quantity > 0'),
    __metadata("design:type", Number)
], SaleItem.prototype, "quantity", void 0);
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
], SaleItem.prototype, "price", void 0);
SaleItem = __decorate([
    ObjectType(),
    Entity({ name: 'sale_items' }),
    __metadata("design:paramtypes", [Object])
], SaleItem);
export { SaleItem };
