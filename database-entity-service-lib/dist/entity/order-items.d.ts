import 'reflect-metadata';
import { Order } from './order.js';
import { ProductDirectory } from './product-directory.js';
export declare class OrderItem {
    id: number;
    orderId: number;
    order: Order;
    productId: number;
    product: ProductDirectory;
    quantity: number;
    price: number;
    constructor(data?: {
        orderId: number;
        productId: number;
        quantity: number;
        price: number;
    });
}
//# sourceMappingURL=order-items.d.ts.map