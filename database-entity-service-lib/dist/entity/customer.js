var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
let Customer = class Customer {
    id;
    fullName;
    phoneNumber;
    registrationDate;
    birthday;
    notes;
    constructor(data) {
        if (data) {
            this.fullName = data.fullName;
            this.phoneNumber = data.phoneNumber;
            this.registrationDate = data.registrationDate;
            this.birthday = data.birthday;
            this.notes = data.notes;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'full_name',
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Customer.prototype, "fullName", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'phone_number',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Customer.prototype, "phoneNumber", void 0);
__decorate([
    Field(),
    Column({
        name: 'registration_date',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", String)
], Customer.prototype, "registrationDate", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'birthday',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", String)
], Customer.prototype, "birthday", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'notes',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], Customer.prototype, "notes", void 0);
Customer = __decorate([
    ObjectType(),
    Entity({ name: 'customers' }),
    __metadata("design:paramtypes", [Object])
], Customer);
export { Customer };
