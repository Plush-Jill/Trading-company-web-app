import { Employee } from '../entity/employee.js';
import { DataSource } from "typeorm";
import { BaseService } from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(dataSource: DataSource) {
    super(dataSource, Employee);
  }
}