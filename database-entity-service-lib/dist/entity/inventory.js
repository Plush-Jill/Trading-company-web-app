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
import { TradingPoint } from './trading-point.js';
import { ProductDirectory } from './product-directory.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let Inventory = class Inventory {
    id;
    tradingPointId;
    tradingPoint;
    productId;
    product;
    quantity;
    sellingPrice;
    lastUpdate;
    constructor(data) {
        if (data) {
            this.tradingPointId = data.tradingPointId;
            this.productId = data.productId;
            this.quantity = data.quantity || 0;
            this.sellingPrice = data.sellingPrice;
            this.lastUpdate = new Date();
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Inventory.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'trading_point_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "tradingPointId", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint),
    JoinColumn({
        name: 'trading_point_id'
    }),
    __metadata("design:type", TradingPoint)
], Inventory.prototype, "tradingPoint", void 0);
__decorate([
    Field(),
    Column({
        name: 'product_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "productId", void 0);
__decorate([
    Field(),
    ManyToOne(() => ProductDirectory),
    JoinColumn({
        name: 'product_id'
    }),
    __metadata("design:type", ProductDirectory)
], Inventory.prototype, "product", void 0);
__decorate([
    Field(),
    Column({ type: 'int', nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Inventory.prototype, "quantity", void 0);
__decorate([
    Field(),
    Column({
        name: 'selling_price',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: false
    }),
    Check('positive_selling_price', 'selling_price > 0'),
    __metadata("design:type", Number)
], Inventory.prototype, "sellingPrice", void 0);
__decorate([
    Field(),
    Column({
        name: 'last_update',
        type: 'timestamp',
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], Inventory.prototype, "lastUpdate", void 0);
Inventory = __decorate([
    ObjectType(),
    Entity({ name: 'inventory' }),
    __metadata("design:paramtypes", [Object])
], Inventory);
export { Inventory };
