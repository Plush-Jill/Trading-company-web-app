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
import { ProductDirectory } from './product-directory.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let ProviderProductList = class ProviderProductList {
    id;
    provider;
    product;
    price;
    minOrderQuantity;
    active;
    lastUpdate;
    constructor(data) {
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
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProviderProductList.prototype, "id", void 0);
__decorate([
    Field(),
    ManyToOne(() => Provider),
    JoinColumn({
        name: 'provider_id',
    }),
    __metadata("design:type", Provider)
], ProviderProductList.prototype, "provider", void 0);
__decorate([
    Field(),
    ManyToOne(() => ProductDirectory),
    JoinColumn({
        name: 'product_id'
    }),
    __metadata("design:type", ProductDirectory)
], ProviderProductList.prototype, "product", void 0);
__decorate([
    Field(),
    Column({
        type: 'numeric',
        precision: 12,
        scale: 2
    }),
    __metadata("design:type", Number)
], ProviderProductList.prototype, "price", void 0);
__decorate([
    Field(),
    Column({
        type: 'int',
        default: 1
    }),
    __metadata("design:type", Number)
], ProviderProductList.prototype, "minOrderQuantity", void 0);
__decorate([
    Field(),
    Column({
        type: 'boolean',
        default: true
    }),
    __metadata("design:type", Boolean)
], ProviderProductList.prototype, "active", void 0);
__decorate([
    Field(),
    Column({
        type: 'timestamp',
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], ProviderProductList.prototype, "lastUpdate", void 0);
ProviderProductList = __decorate([
    ObjectType(),
    Entity({ name: 'providers_product_list' }),
    __metadata("design:paramtypes", [Object])
], ProviderProductList);
export { ProviderProductList };
