var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, } from 'typeorm';
import 'reflect-metadata';
import { Employee } from './employee.js';
import { TradingPointHall } from './trading-point-hall.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let HallAssignment = class HallAssignment {
    id;
    employeeId;
    hallId;
    constructor(data) {
        if (data) {
            this.employeeId = data.employeeId;
            this.hallId = data.hallId;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], HallAssignment.prototype, "id", void 0);
__decorate([
    Field(),
    ManyToOne(() => Employee),
    JoinColumn({
        name: 'employee_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", Employee)
], HallAssignment.prototype, "employeeId", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPointHall),
    JoinColumn({
        name: 'hall_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", TradingPointHall)
], HallAssignment.prototype, "hallId", void 0);
HallAssignment = __decorate([
    ObjectType(),
    Entity({ name: 'halls_assignment' }),
    __metadata("design:paramtypes", [Object])
], HallAssignment);
export { HallAssignment };
