import 'reflect-metadata';
import { Customer } from './customer.js';
import { Employee } from './employee.js';
import { TradingPoint } from './trading-point.js';
import { PaymentMethod } from './enum/payment-method.js';
export declare class Sale {
    id: number;
    tradingPointId: number;
    tradingPoint: TradingPoint;
    employeeId: number;
    employee: Employee;
    customerId?: number;
    customer?: Customer;
    saleDate: Date;
    totalAmount: number;
    paymentMethod: PaymentMethod;
    constructor(data?: {
        tradingPointId: number;
        employeeId: number;
        customerId?: number;
        saleDate?: Date;
        totalAmount: number;
        paymentMethod?: PaymentMethod;
    });
}
//# sourceMappingURL=sale.d.ts.map