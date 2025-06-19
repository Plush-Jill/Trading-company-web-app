import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { Employee } from './employee.js';
import { ProductRequestStatus } from './enum/product-request-status.js';
export declare class ProductRequest {
    id: number;
    tradingPoint: TradingPoint;
    employee: Employee;
    requestDate?: Date;
    status: ProductRequestStatus;
    notes?: boolean;
    constructor(data?: {
        tradingPoint: TradingPoint;
        employee: Employee;
        requestDate?: Date;
        status?: ProductRequestStatus;
    });
}
//# sourceMappingURL=product-request.d.ts.map