import 'reflect-metadata';
import { Provider } from './provider.js';
import { ProductDirectory } from './product-directory.js';
export declare class ProviderProductList {
    id: number;
    provider: Provider;
    product: ProductDirectory;
    price: number;
    minOrderQuantity: number;
    active: boolean;
    lastUpdate: Date;
    constructor(data?: {
        provider: Provider;
        product: ProductDirectory;
        price: number;
        minOrderQuantity: number;
        active?: boolean;
        lastUpdate?: Date;
    });
}
//# sourceMappingURL=provider-product-list.d.ts.map