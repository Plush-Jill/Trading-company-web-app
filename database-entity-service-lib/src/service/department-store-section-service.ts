import { DepartmentStoreSection } from '../entity/department-store-section.js';
import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';
import { BaseService } from '../base-service.js';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentStoreSectionService extends BaseService<DepartmentStoreSection> {
  private tradingPointsRepository: Repository<TradingPoint>;

  constructor(dataSource: DataSource) {
    super(dataSource, DepartmentStoreSection);
    this.tradingPointsRepository = this.dataSource.getRepository(TradingPoint);
  }

  async create(data: DeepPartial<DepartmentStoreSection>): Promise<DepartmentStoreSection> {
    if (data.tradingPoint?.id) {
      const tradingPoint = await this.tradingPointsRepository.findOneByOrFail({ id: data.tradingPoint.id });
      if (tradingPoint.type !== TradingPointType.DepartmentStore) {
        throw new Error('Sections can only be created in department stores');
      }
    }
    return super.create(data);
  }
}