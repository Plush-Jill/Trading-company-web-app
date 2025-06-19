import { Order } from '../entity/order.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService extends BaseService<Order> {
  constructor(dataSource: DataSource) {
    super(dataSource, Order);
  }
}