import 'reflect-metadata';
import { TradingPointType } from './enum/trading-point-type.js';
export declare class TradingPoint {
    id: number;
    name: string;
    type: TradingPointType;
    address: string;
    sizeSqm?: number;
    rentCost?: number;
    utilityCost?: number;
    counterCount?: number;
    floorsCount: number;
    openingDate: Date;
    active: boolean;
    constructor(data?: {
        name: string;
        type: TradingPointType;
        address: string;
        sizeSqm?: number;
        rentCost: number;
        utilityCost: number;
        counterCount: number;
        floorsCount?: number;
        openingDate?: Date;
        active?: boolean;
    });
}
//# sourceMappingURL=trading-point.d.ts.map