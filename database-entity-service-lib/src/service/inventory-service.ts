import { Inventory } from '../entity/inventory.js';
import {DataSource, Repository} from "typeorm";
import {BaseService} from "../base-service.js";
import {HallAssignment} from "../entity/hall-assignment.js";

import { Injectable } from '@nestjs/common';
@Injectable()
export class InventoryService extends BaseService<Inventory> {
  constructor(dataSource: DataSource) {
    super(dataSource, Inventory);
  }
}