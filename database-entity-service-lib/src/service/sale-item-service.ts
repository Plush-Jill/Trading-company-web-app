import { SaleItem } from '../entity/sale-item.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaleItemService extends BaseService<SaleItem> {
  constructor(dataSource: DataSource) {
    super(dataSource, SaleItem);
  }
}