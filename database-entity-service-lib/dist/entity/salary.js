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
import { Employee } from './employee.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let Salary = class Salary {
    id;
    employeeId;
    employee;
    periodStart;
    periodEnd;
    baseAmount;
    bonus;
    tax;
    totalPaid;
    paymentDate;
    constructor(data) {
        if (data) {
            this.employeeId = data.employeeId;
            this.periodStart = data.periodStart;
            this.periodEnd = data.periodEnd;
            this.baseAmount = data.baseAmount;
            this.bonus = data.bonus || 0;
            this.tax = data.tax;
            this.totalPaid = data.totalPaid;
            this.paymentDate = data.paymentDate;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Salary.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'employee_id',
        type: 'int',
        nullable: false
    }),
    __metadata("design:type", Number)
], Salary.prototype, "employeeId", void 0);
__decorate([
    Field(),
    ManyToOne(() => Employee),
    JoinColumn({
        name: 'employee_id'
    }),
    __metadata("design:type", Employee)
], Salary.prototype, "employee", void 0);
__decorate([
    Field(),
    Column({
        name: 'period_start',
        type: 'date',
        nullable: false
    }),
    __metadata("design:type", Date)
], Salary.prototype, "periodStart", void 0);
__decorate([
    Field(),
    Column({
        name: 'period_end',
        type: 'date',
        nullable: false
    }),
    Check('valid_period', 'period_end >= period_start'),
    __metadata("design:type", Date)
], Salary.prototype, "periodEnd", void 0);
__decorate([
    Field(),
    Column({
        name: 'base_amount',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: false
    }),
    __metadata("design:type", Number)
], Salary.prototype, "baseAmount", void 0);
__decorate([
    Field(),
    Column({
        name: 'bonus',
        type: 'numeric',
        precision: 12,
        scale: 2,
        default: 0
    }),
    __metadata("design:type", Number)
], Salary.prototype, "bonus", void 0);
__decorate([
    Field(),
    Column({
        name: 'tax',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: false
    }),
    __metadata("design:type", Number)
], Salary.prototype, "tax", void 0);
__decorate([
    Field(),
    Column({
        name: 'total_paid',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: false
    }),
    __metadata("design:type", Number)
], Salary.prototype, "totalPaid", void 0);
__decorate([
    Field(),
    Column({
        name: 'payment_date',
        type: 'date',
        nullable: false
    }),
    __metadata("design:type", Date)
], Salary.prototype, "paymentDate", void 0);
Salary = __decorate([
    ObjectType(),
    Entity({ name: 'salaries' }),
    __metadata("design:paramtypes", [Object])
], Salary);
export { Salary };
