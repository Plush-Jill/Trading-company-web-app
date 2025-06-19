import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { ProductDirectory } from './product-directory.js';
import { Employee } from './employee.js';
import { TransferStatus } from './enum/transfer-status.js';
export declare class InventoryTransfer {
    id: number;
    sourcePointId: number;
    sourcePoint: TradingPoint;
    destinationPointId: number;
    destinationPoint: TradingPoint;
    productId: number;
    product: ProductDirectory;
    quantity: number;
    transferDate: Date;
    initiatedById: number;
    initiatedBy: Employee;
    approvedById?: number;
    approvedBy?: Employee;
    status: TransferStatus;
    constructor(data?: {
        sourcePointId: number;
        destinationPointId: number;
        productId: number;
        quantity: number;
        initiatedById: number;
        approvedById?: number;
        status?: TransferStatus;
    });
}
//# sourceMappingURL=inventory-transfer.d.ts.map