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
import { PRODUCT_CATEGORY_ENUM_NAME, ProductCategory } from './enum/product-category.js';
import { MEASUREMENT_TYPE_ENUM_NAME, MeasurementType } from './enum/measurement-type.js';
import { Field, ID, ObjectType } from "@nestjs/graphql";
let ProductDirectory = class ProductDirectory {
    id;
    name;
    description;
    category;
    measurement;
    createdAt;
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.name = data.name;
            this.description = data.description ?? '';
            this.category = data.category ?? ProductCategory.None;
            this.measurement = data.measurement;
            this.createdAt = data.createdAt
                ? new Date(data.createdAt)
                : new Date();
        }
    }
};
__decorate([
    Field(() => ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductDirectory.prototype, "id", void 0);
__decorate([
    Field(),
    Column({
        name: 'name',
        type: 'varchar',
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductDirectory.prototype, "name", void 0);
__decorate([
    Field({ nullable: true }),
    Column({
        name: 'description',
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], ProductDirectory.prototype, "description", void 0);
__decorate([
    Field(),
    Column({
        name: 'category',
        type: 'enum',
        enum: ProductCategory,
        enumName: PRODUCT_CATEGORY_ENUM_NAME,
    }),
    __metadata("design:type", String)
], ProductDirectory.prototype, "category", void 0);
__decorate([
    Field(),
    Column({
        name: 'measurement',
        type: 'enum',
        enum: MeasurementType,
        enumName: MEASUREMENT_TYPE_ENUM_NAME,
    }),
    __metadata("design:type", String)
], ProductDirectory.prototype, "measurement", void 0);
__decorate([
    Field(),
    Column({
        name: 'created_at',
        type: 'date',
        default: () => 'CURRENT_DATE'
    }),
    __metadata("design:type", Date)
], ProductDirectory.prototype, "createdAt", void 0);
ProductDirectory = __decorate([
    ObjectType(),
    Entity({ name: 'product_directory' }),
    __metadata("design:paramtypes", [Object])
], ProductDirectory);
export { ProductDirectory };
