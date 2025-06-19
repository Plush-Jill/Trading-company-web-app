import 'reflect-metadata';
import { Employee } from './employee.js';
export declare class Salary {
    id: number;
    employeeId: number;
    employee: Employee;
    periodStart: Date;
    periodEnd: Date;
    baseAmount: number;
    bonus: number;
    tax: number;
    totalPaid: number;
    paymentDate: Date;
    constructor(data?: {
        employeeId: number;
        periodStart: Date;
        periodEnd: Date;
        baseAmount: number;
        bonus?: number;
        tax: number;
        totalPaid: number;
        paymentDate: Date;
    });
}
//# sourceMappingURL=salary.d.ts.map