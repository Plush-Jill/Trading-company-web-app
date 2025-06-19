import { HallAssignment } from '../entity/hall-assignment.js';
import { Employee } from "../entity/employee.js";
import { TradingPointHall } from "../entity/trading-point-hall.js";
import { BaseService } from "../base-service.js";
import { DataSource } from "typeorm";
import { Injectable } from '@nestjs/common';

@Injectable()
export class HallAssignmentService extends BaseService<HallAssignment> {
  constructor(dataSource: DataSource) {
    super(dataSource, HallAssignment);
  }
}