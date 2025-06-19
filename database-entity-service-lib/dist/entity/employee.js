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
import { EMPLOYEE_ROLE_ENUM_NAME, EmployeeRole } from './enum/employee-role.js';
import { TradingPoint } from './trading-point.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let Employee = class Employee {
    id;
    fullName;
    role;
    tradingPoint;
    hireDate;
    baseSalary;
    phone;
    email;
    active;
    constructor(data) {
        if (data) {
            this.fullName = data.fullName;
            this.role = data.role;
            this.tradingPoint = data.tradingPoint;
            this.hireDate = data.hireDate ?? new Date();
            this.baseSalary = data.baseSalary;
            this.phone = data.phone;
            this.email = data.email;
            this.active = data.active ?? true;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'full_name',
        type: 'varchar',
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], Employee.prototype, "fullName", void 0);
__decorate([
    Field(),
    Column({
        type: 'enum',
        enum: EmployeeRole,
        enumName: EMPLOYEE_ROLE_ENUM_NAME,
        nullable: false
    }),
    __metadata("design:type", String)
], Employee.prototype, "role", void 0);
__decorate([
    Field(),
    ManyToOne(() => TradingPoint),
    JoinColumn({
        name: 'trading_point_id'
    }),
    __metadata("design:type", TradingPoint)
], Employee.prototype, "tradingPoint", void 0);
__decorate([
    Field(),
    Column({
        name: 'hire_date',
        type: 'date',
        default: () => 'CURRENT_DATE',
        nullable: false
    }),
    __metadata("design:type", Date)
], Employee.prototype, "hireDate", void 0);
__decorate([
    Field(),
    Column({
        name: 'base_salary',
        type: 'numeric',
        precision: 10,
        scale: 2,
        nullable: false
    }),
    __metadata("design:type", Number)
], Employee.prototype, "baseSalary", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'phone',
        type: 'varchar',
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], Employee.prototype, "phone", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'email',
        type: 'varchar',
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    Field(),
    Column({
        name: 'active',
        type: 'boolean',
        default: true,
        nullable: false
    }),
    __metadata("design:type", Boolean)
], Employee.prototype, "active", void 0);
Employee = __decorate([
    ObjectType(),
    Entity({ name: 'employees' }),
    __metadata("design:paramtypes", [Object])
], Employee);
export { Employee };
