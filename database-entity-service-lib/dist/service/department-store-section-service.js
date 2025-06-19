var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DepartmentStoreSection } from '../entity/department-store-section.js';
import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';
import { BaseService } from '../base-service.js';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
let DepartmentStoreSectionService = class DepartmentStoreSectionService extends BaseService {
    tradingPointsRepository;
    constructor(dataSource) {
        super(dataSource, DepartmentStoreSection);
        this.tradingPointsRepository = this.dataSource.getRepository(TradingPoint);
    }
    async create(data) {
        if (data.tradingPoint?.id) {
            const tradingPoint = await this.tradingPointsRepository.findOneByOrFail({ id: data.tradingPoint.id });
            if (tradingPoint.type !== TradingPointType.DepartmentStore) {
                throw new Error('Sections can only be created in department stores');
            }
        }
        return super.create(data);
    }
};
DepartmentStoreSectionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DataSource])
], DepartmentStoreSectionService);
export { DepartmentStoreSectionService };
