import { DataSource, FindOptionsWhere, Repository, DeepPartial, FindOptionsOrder, FindOptionsSelect } from "typeorm";
export interface QueryOptions<T> {
    where?: FindOptionsWhere<T> | FindOptionsWhere<T>[];
    order?: FindOptionsOrder<T>;
    take?: number;
    skip?: number;
    select?: FindOptionsSelect<T>;
    relations?: string[];
}
export declare abstract class BaseService<T extends {
    id: number;
}> {
    protected repository: Repository<T>;
    protected dataSource: DataSource;
    protected constructor(dataSource: DataSource, entity: new () => T);
    protected getWhereConditions(conditions: FindOptionsWhere<T> | T | T[]): Promise<FindOptionsWhere<T>>;
    private cleanFindOptions;
    create(data: DeepPartial<T>): Promise<T>;
    read(options?: QueryOptions<T>): Promise<T[]>;
    readOne(options?: QueryOptions<T>): Promise<T | null>;
    readWithCount(options?: QueryOptions<T>): Promise<[T[], number]>;
    update(options: QueryOptions<T> | undefined, updateData: DeepPartial<T>): Promise<T[]>;
    delete(conditions: FindOptionsWhere<T> | T | T[]): Promise<number>;
}
//# sourceMappingURL=base-service.d.ts.map