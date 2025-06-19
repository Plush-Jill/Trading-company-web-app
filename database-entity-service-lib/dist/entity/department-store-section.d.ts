import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { Employee } from './employee.js';
export declare class DepartmentStoreSection {
    id: number;
    tradingPoint: TradingPoint;
    name: string;
    floorNumber: number;
    managerId?: Employee;
    constructor(data?: {
        name: string;
        tradingPoint: TradingPoint;
        floorNumber: number;
        managerId?: Employee;
    });
}
//# sourceMappingURL=department-store-section.d.ts.map