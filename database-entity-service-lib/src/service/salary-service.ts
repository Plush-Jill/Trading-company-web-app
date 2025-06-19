import { Salary } from '../entity/salary.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class SalaryService extends BaseService<Salary> {
  constructor(dataSource: DataSource) {
    super(dataSource, Salary);
  }
}