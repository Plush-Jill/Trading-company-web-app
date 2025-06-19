import 'reflect-metadata';
import { EmployeeRole } from './enum/employee-role.js';
import { TradingPoint } from './trading-point.js';
export declare class Employee {
    id: number;
    fullName: string;
    role: EmployeeRole;
    tradingPoint: TradingPoint;
    hireDate: Date;
    baseSalary: number;
    phone?: string;
    email?: string;
    active: boolean;
    constructor(data?: {
        fullName: string;
        role: EmployeeRole;
        tradingPoint: TradingPoint;
        hireDate?: Date;
        baseSalary: number;
        phone?: string;
        email?: string;
        active?: boolean;
    });
}
//# sourceMappingURL=employee.d.ts.map