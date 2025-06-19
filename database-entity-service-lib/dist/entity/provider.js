var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';
import 'reflect-metadata';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let Provider = class Provider {
    id;
    name;
    phone;
    email;
    address;
    active;
    registrationDate;
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.phone = data.phone;
            this.email = data.email;
            this.active = data.active ?? true;
            this.address = data.address ?? '';
            this.registrationDate = data.registrationDate
                ? new Date(data.registrationDate)
                : new Date();
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Provider.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'name',
        type: 'varchar',
        length: 100
    }),
    __metadata("design:type", String)
], Provider.prototype, "name", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'phone',
        type: 'varchar',
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "phone", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'email',
        type: 'varchar',
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "email", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "address", void 0);
__decorate([
    Field(),
    Column({
        name: 'active',
        type: 'boolean',
        default: true
    }),
    __metadata("design:type", Boolean)
], Provider.prototype, "active", void 0);
__decorate([
    Field(),
    Column({
        name: 'registration_date',
        type: 'date',
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], Provider.prototype, "registrationDate", void 0);
Provider = __decorate([
    ObjectType(),
    Entity({ name: 'providers' }),
    __metadata("design:paramtypes", [Object])
], Provider);
export { Provider };
