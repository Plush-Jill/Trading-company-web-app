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
import { ProductRequest } from './product-request.js';
import { ProductDirectory } from './product-directory.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let ProductRequestItem = class ProductRequestItem {
    id;
    request;
    product;
    quantity;
    constructor(data) {
        if (data) {
            this.request = data.request;
            this.product = data.product;
            this.quantity = data.quantity ?? 1;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductRequestItem.prototype, "id", void 0);
__decorate([
    Field(),
    ManyToOne(() => ProductRequest, { nullable: false }),
    JoinColumn({
        name: 'request_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", ProductRequest)
], ProductRequestItem.prototype, "request", void 0);
__decorate([
    Field(),
    ManyToOne(() => ProductDirectory),
    JoinColumn({
        name: 'product_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", ProductDirectory)
], ProductRequestItem.prototype, "product", void 0);
__decorate([
    Field(),
    Column({
        name: 'quantity',
        type: 'int',
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductRequestItem.prototype, "quantity", void 0);
ProductRequestItem = __decorate([
    ObjectType(),
    Entity({ name: 'product_request_items' }),
    __metadata("design:paramtypes", [Object])
], ProductRequestItem);
export { ProductRequestItem };
