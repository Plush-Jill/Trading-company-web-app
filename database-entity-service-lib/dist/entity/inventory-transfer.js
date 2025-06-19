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
import { Employee } from './employee.js';
import { TransferStatus } from './enum/transfer-status.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let InventoryTransfer = class InventoryTransfer {
    id;
    sourcePointId;
    sourcePoint;
    destinationPointId;
    destinationPoint;
    productId;
    product;
    quantity;
    transferDate;
    initiatedById;
    initiatedBy;
    approvedById;
    approvedBy;
    status;
    constructor(data) {
        if (data) {
            this.sourcePointId = data.sourcePointId;
            this.destinationPointId = data.destinationPointId;
            this.productId = data.productId;
            this.quantity = data.quantity;
            this.initiatedById = data.initiatedById;
            this.approvedById = data.approvedById;
            this.status = data.status || TransferStatus.PLANNED;
            this.transferDate = new Date();
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InventoryTransfer.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'source_point_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], InventoryTransfer.prototype, "sourcePointId", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint),
    JoinColumn({
        name: 'source_point_id'
    }),
    __metadata("design:type", TradingPoint)
], InventoryTransfer.prototype, "sourcePoint", void 0);
__decorate([
    Field(),
    Column({
        name: 'destination_point_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], InventoryTransfer.prototype, "destinationPointId", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint),
    JoinColumn({
        name: 'destination_point_id'
    }),
    __metadata("design:type", TradingPoint)
], InventoryTransfer.prototype, "destinationPoint", void 0);
__decorate([
    Field(),
    Column({
        name: 'product_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], InventoryTransfer.prototype, "productId", void 0);
__decorate([
    Field(),
    ManyToOne(() => ProductDirectory),
    JoinColumn({
        name: 'product_id'
    }),
    __metadata("design:type", ProductDirectory)
], InventoryTransfer.prototype, "product", void 0);
__decorate([
    Field(),
    Column({
        type: 'int',
        nullable: false
    }),
    Check('positive_quantity', 'quantity > 0'),
    __metadata("design:type", Number)
], InventoryTransfer.prototype, "quantity", void 0);
__decorate([
    Field(),
    Column({
        name: 'transfer_date',
        type: 'timestamp',
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], InventoryTransfer.prototype, "transferDate", void 0);
__decorate([
    Field(),
    Column({
        name: 'initiated_by',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], InventoryTransfer.prototype, "initiatedById", void 0);
__decorate([
    Field(),
    ManyToOne(() => Employee),
    JoinColumn({
        name: 'initiated_by'
    }),
    __metadata("design:type", Employee)
], InventoryTransfer.prototype, "initiatedBy", void 0);
__decorate([
    Field(),
    Column({
        name: 'approved_by',
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], InventoryTransfer.prototype, "approvedById", void 0);
__decorate([
    Field(),
    ManyToOne(() => Employee),
    JoinColumn({
        name: 'approved_by'
    }),
    __metadata("design:type", Employee)
], InventoryTransfer.prototype, "approvedBy", void 0);
__decorate([
    Field(),
    Column({
        type: 'enum',
        enum: TransferStatus,
        default: TransferStatus.PLANNED
    }),
    __metadata("design:type", String)
], InventoryTransfer.prototype, "status", void 0);
InventoryTransfer = __decorate([
    ObjectType(),
    Entity({ name: 'inventory_transfers' }),
    __metadata("design:paramtypes", [Object])
], InventoryTransfer);
export { InventoryTransfer };
2;
