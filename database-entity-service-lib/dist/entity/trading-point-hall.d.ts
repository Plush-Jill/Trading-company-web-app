import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { DepartmentStoreSection } from './department-store-section.js';
export declare class TradingPointHall {
    id: number;
    tradingPoint: TradingPoint;
    section?: DepartmentStoreSection;
    name: string;
    floorNumber: number;
    sizeSqm: number;
    constructor(data?: {
        tradingPoint: TradingPoint;
        section: DepartmentStoreSection;
        name: string;
        floorNumber: number;
        sizeSqm: number;
    });
}
//# sourceMappingURL=trading-point-hall.d.ts.map