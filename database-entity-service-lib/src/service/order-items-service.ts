import { OrderItem } from '../entity/order-items.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderItemsService extends BaseService<OrderItem> {
  constructor(dataSource: DataSource) {
    super(dataSource, OrderItem);
  }
}