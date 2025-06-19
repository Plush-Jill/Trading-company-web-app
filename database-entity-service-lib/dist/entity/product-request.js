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
import { TradingPoint } from './trading-point.js';
import { Employee } from './employee.js';
import { PRODUCT_REQUEST_STATUS_ENUM_NAME, ProductRequestStatus } from './enum/product-request-status.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let ProductRequest = class ProductRequest {
    id;
    tradingPoint;
    employee;
    requestDate;
    status;
    notes;
    constructor(data) {
        if (data) {
            this.tradingPoint = data.tradingPoint;
            this.employee = data.employee;
            this.requestDate = data.requestDate ?? new Date();
            this.status = data.status ?? ProductRequestStatus.New;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductRequest.prototype, "id", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint, { nullable: false }),
    JoinColumn({
        name: 'trading_point_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", TradingPoint)
], ProductRequest.prototype, "tradingPoint", void 0);
__decorate([
    Field(),
    ManyToOne(() => Employee),
    JoinColumn({
        name: 'employee_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", Employee)
], ProductRequest.prototype, "employee", void 0);
__decorate([
    Field(),
    Column({
        name: 'request_date',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], ProductRequest.prototype, "requestDate", void 0);
__decorate([
    Field(),
    Column({
        name: 'status',
        type: 'enum',
        enum: ProductRequestStatus,
        enumName: PRODUCT_REQUEST_STATUS_ENUM_NAME
    }),
    __metadata("design:type", String)
], ProductRequest.prototype, "status", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'notes',
        type: 'text',
        default: '',
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ProductRequest.prototype, "notes", void 0);
ProductRequest = __decorate([
    ObjectType(),
    Entity({ name: 'product_requests' }),
    __metadata("design:paramtypes", [Object])
], ProductRequest);
export { ProductRequest };
