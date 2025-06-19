import 'reflect-metadata';
import { ProductRequest } from './product-request.js';
import { ProductDirectory } from './product-directory.js';
export declare class ProductRequestItem {
    id: number;
    request: ProductRequest;
    product: ProductDirectory;
    quantity: number;
    constructor(data?: {
        request: ProductRequest;
        product: ProductDirectory;
        quantity?: number;
    });
}
//# sourceMappingURL=product-request-item.d.ts.map