import { Customer } from '../entity/customer.js';
import { DataSource } from "typeorm";
import { BaseService } from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService extends BaseService<Customer> {
  constructor(dataSource: DataSource) {
    super(dataSource, Customer);
  }
}