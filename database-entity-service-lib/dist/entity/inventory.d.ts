import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { ProductDirectory } from './product-directory.js';
export declare class Inventory {
    id: number;
    tradingPointId: number;
    tradingPoint: TradingPoint;
    productId: number;
    product: ProductDirectory;
    quantity: number;
    sellingPrice: number;
    lastUpdate: Date;
    constructor(data?: {
        tradingPointId: number;
        productId: number;
        quantity?: number;
        sellingPrice: number;
    });
}
//# sourceMappingURL=inventory.d.ts.map