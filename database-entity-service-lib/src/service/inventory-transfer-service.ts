import { InventoryTransfer } from '../entity/inventory-transfer.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryTransferService extends BaseService<InventoryTransfer> {
  constructor(dataSource: DataSource) {
    super(dataSource, InventoryTransfer);
  }
}