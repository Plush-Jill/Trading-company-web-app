import { ProductDirectory } from '../entity/product-directory.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductDirectoryService extends BaseService<ProductDirectory> {
  constructor(dataSource: DataSource) {
    super(dataSource, ProductDirectory);
  }
}