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
import { Employee } from './employee.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let DepartmentStoreSection = class DepartmentStoreSection {
    id;
    tradingPoint;
    name;
    floorNumber;
    managerId;
    constructor(data) {
        if (data) {
            this.tradingPoint = data.tradingPoint;
            this.name = data.name;
            this.floorNumber = data.floorNumber;
            this.managerId = data.managerId;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], DepartmentStoreSection.prototype, "id", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint, { nullable: false }),
    JoinColumn({
        name: 'trading_point_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", TradingPoint)
], DepartmentStoreSection.prototype, "tradingPoint", void 0);
__decorate([
    Field(),
    Column({
        type: 'varchar',
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], DepartmentStoreSection.prototype, "name", void 0);
__decorate([
    Field(),
    Column({
        type: 'int',
        name: 'floor_number',
        nullable: false
    }),
    __metadata("design:type", Number)
], DepartmentStoreSection.prototype, "floorNumber", void 0);
__decorate([
    Field(),
    ManyToOne(() => Employee, { nullable: true }),
    JoinColumn({
        name: 'manager_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", Employee)
], DepartmentStoreSection.prototype, "managerId", void 0);
DepartmentStoreSection = __decorate([
    ObjectType(),
    Entity({ name: 'department_store_sections' }),
    __metadata("design:paramtypes", [Object])
], DepartmentStoreSection);
export { DepartmentStoreSection };
