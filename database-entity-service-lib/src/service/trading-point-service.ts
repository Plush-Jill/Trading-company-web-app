import { TradingPoint } from '../entity/trading-point.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class TradingPointService extends BaseService<TradingPoint> {
  constructor(dataSource: DataSource) {
    super(dataSource, TradingPoint);
  }
}