import 'reflect-metadata';
import { Sale } from './sale.js';
import { ProductDirectory } from './product-directory.js';
export declare class SaleItem {
    id: number;
    saleId: number;
    sale: Sale;
    productId: number;
    product: ProductDirectory;
    quantity: number;
    price: number;
    constructor(data?: {
        saleId: number;
        productId: number;
        quantity: number;
        price: number;
    });
}
//# sourceMappingURL=sale-item.d.ts.map