import { Provider } from '../entity/provider.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderService extends BaseService<Provider> {
  constructor(dataSource: DataSource) {
    super(dataSource, Provider);
  }
}