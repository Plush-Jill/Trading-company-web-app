var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, } from 'typeorm';
import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { DepartmentStoreSection } from './department-store-section.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let TradingPointHall = class TradingPointHall {
    id;
    tradingPoint;
    section;
    name;
    floorNumber;
    sizeSqm;
    constructor(data) {
        if (data) {
            this.tradingPoint = data.tradingPoint;
            this.section = data.section ?? null;
            this.name = data.name;
            this.floorNumber = data.floorNumber ?? 1;
            this.sizeSqm = data.sizeSqm;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TradingPointHall.prototype, "id", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint, { nullable: false }),
    JoinColumn({
        name: 'trading_point_id'
    }),
    __metadata("design:type", TradingPoint)
], TradingPointHall.prototype, "tradingPoint", void 0);
__decorate([
    Field(),
    ManyToOne(() => DepartmentStoreSection, { nullable: true }),
    JoinColumn({
        name: 'section_id'
    }),
    __metadata("design:type", DepartmentStoreSection)
], TradingPointHall.prototype, "section", void 0);
__decorate([
    Field(),
    Column({
        type: 'varchar',
        length: 100
    }),
    __metadata("design:type", String)
], TradingPointHall.prototype, "name", void 0);
__decorate([
    Field(),
    Column({
        type: 'int',
        name: 'floor_number',
        default: 1
    }),
    __metadata("design:type", Number)
], TradingPointHall.prototype, "floorNumber", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        type: 'numeric',
        precision: 10,
        scale: 2,
        name: 'size_sqm',
        nullable: true
    }),
    __metadata("design:type", Number)
], TradingPointHall.prototype, "sizeSqm", void 0);
TradingPointHall = __decorate([
    ObjectType(),
    Entity({ name: 'trading_point_halls' }),
    __metadata("design:paramtypes", [Object])
], TradingPointHall);
export { TradingPointHall };
