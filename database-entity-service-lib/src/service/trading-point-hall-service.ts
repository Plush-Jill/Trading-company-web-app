import { TradingPointHall } from '../entity/trading-point-hall.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class TradingPointHallService extends BaseService<TradingPointHall> {
  constructor(dataSource: DataSource) {
    super(dataSource, TradingPointHall);
  }
}