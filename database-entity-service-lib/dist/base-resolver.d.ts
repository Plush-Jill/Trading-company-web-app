import { FindOptionsWhere } from 'typeorm';
import { BaseService } from './base-service.js';
export declare class PaginationArgs {
    skip?: number;
    take?: number;
}
export declare class PaginatedResponse<T> {
    items?: T[];
    totalCount?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
}
export type FilterInput = {
    [key: string]: any;
    _like?: string;
    _gt?: any;
    _gte?: any;
    _lt?: any;
    _lte?: any;
    _in?: any[];
    _null?: boolean;
};
export declare function createBaseResolver<T extends {
    id: number;
}>(suffix: string, entityClass: new () => T, serviceClass: new (...args: any[]) => BaseService<T>): abstract new (dataSource: any) => {
    service: BaseService<T>;
    buildWhereCondition(filter?: FilterInput): FindOptionsWhere<T>;
    find(filter?: string, orderBy?: string, skip?: number, take?: number, relations?: string[]): Promise<T[]>;
    findWithPagination(filter?: string, orderBy?: string, skip?: number, take?: number, relations?: string[]): Promise<any>;
    findOne(filter: string, relations?: string[]): Promise<T | null>;
    getById(id: number): Promise<T | null>;
};
//# sourceMappingURL=base-resolver.d.ts.map