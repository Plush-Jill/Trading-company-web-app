var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, } from 'typeorm';
import "reflect-metadata";
import { Field, ID, ObjectType } from "@nestjs/graphql";
let User = class User {
    id;
    email;
    password;
    refreshToken;
    resetToken;
    registrationDate;
    lastLogin;
    constructor(data) {
        if (data) {
            this.email = data.email;
            this.password = data.password;
            this.resetToken = data.resetToken;
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        type: 'varchar',
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Field(),
    Column({
        type: 'varchar',
        length: 255
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Field(),
    Column({
        name: 'refresh_token',
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
__decorate([
    Field(),
    Column({
        name: 'reset_token',
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "resetToken", void 0);
__decorate([
    Field(),
    CreateDateColumn({
        name: 'registration_date',
        type: 'timestamp',
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], User.prototype, "registrationDate", void 0);
__decorate([
    Field({ nullable: true }),
    UpdateDateColumn({
        name: 'last_login',
        type: 'timestamp',
        nullable: true
    }),
    __metadata("design:type", Date)
], User.prototype, "lastLogin", void 0);
User = __decorate([
    ObjectType(),
    Entity({ name: 'users' }),
    __metadata("design:paramtypes", [Object])
], User);
export { User };
