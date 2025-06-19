import { ProductRequest } from '../entity/product-request.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRequestService extends BaseService<ProductRequest> {
  constructor(dataSource: DataSource) {
    super(dataSource, ProductRequest);
  }
}