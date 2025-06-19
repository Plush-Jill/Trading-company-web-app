import 'reflect-metadata';
import { Provider } from './provider.js';
import { OrderStatus } from './enum/order-status.js';
export declare class Order {
    id: number;
    provider: Provider;
    orderDate?: Date;
    status: OrderStatus;
    totalCost: number;
    notes?: string;
    constructor(data?: {
        provider: Provider;
        orderDate?: Date;
        status?: OrderStatus;
        totalCost?: number;
        notes?: string;
    });
}
//# sourceMappingURL=order.d.ts.map