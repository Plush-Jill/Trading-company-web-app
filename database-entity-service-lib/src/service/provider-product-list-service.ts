import { ProviderProductList } from '../entity/provider-product-list.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvideProductListService extends BaseService<ProviderProductList> {
  constructor(dataSource: DataSource) {
    super(dataSource, ProviderProductList);
  }
}