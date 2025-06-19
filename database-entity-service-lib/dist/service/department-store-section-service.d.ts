import { DepartmentStoreSection } from '../entity/department-store-section.js';
import { BaseService } from '../base-service.js';
import { DataSource, DeepPartial } from 'typeorm';
export declare class DepartmentStoreSectionService extends BaseService<DepartmentStoreSection> {
    private tradingPointsRepository;
    constructor(dataSource: DataSource);
    create(data: DeepPartial<DepartmentStoreSection>): Promise<DepartmentStoreSection>;
}
//# sourceMappingURL=department-store-section-service.d.ts.map