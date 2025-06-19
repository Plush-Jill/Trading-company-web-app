import {
    DataSource,
    FindOptionsWhere,
    Repository,
    In,
    DeepPartial,
    FindManyOptions,
    FindOptionsOrder,
    FindOptionsSelect
} from "typeorm";

export interface QueryOptions<T> {
    where?: FindOptionsWhere<T> | FindOptionsWhere<T>[];
    order?: FindOptionsOrder<T>;
    take?: number;
    skip?: number;
    select?: FindOptionsSelect<T>;
    relations?: string[];
}

export abstract class BaseService<T extends { id: number }> {
    protected repository: Repository<T>;
    protected dataSource: DataSource;

    protected constructor(dataSource: DataSource, entity: new () => T) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(entity);
    }

    protected async getWhereConditions(
        conditions: FindOptionsWhere<T> | T | T[]
    ): Promise<FindOptionsWhere<T>> {
        if (Array.isArray(conditions)) {
            const ids = conditions
                .filter(entity => entity.id)
                .map(entity => entity.id);
            return { id: In(ids) } as FindOptionsWhere<T>;
        }
        if ('id' in conditions) {
            return { id: conditions.id } as FindOptionsWhere<T>;
        }
        return conditions;
    }

    private cleanFindOptions<TOptions extends Record<string, any>>(options: TOptions): TOptions {
        const cleaned = {} as TOptions;

        (Object.keys(options) as Array<keyof TOptions>).forEach(key => {
            if (options[key] !== undefined) {
                cleaned[key] = options[key];
            }
        });

        return cleaned;
    }

    async create(data: DeepPartial<T>): Promise<T> {
        const entity = this.repository.create(data);
        return await this.repository.save(entity);
    }

    async read(options: QueryOptions<T> = {}): Promise<T[]> {
        const findOptions: FindManyOptions<T> = {
            where: options.where,
            order: options.order,
            take: options.take,
            skip: options.skip,
            select: options.select,
            relations: options.relations
        };

        const cleanedOptions = this.cleanFindOptions(findOptions);
        return this.repository.find(cleanedOptions);
    }

    async readOne(options: QueryOptions<T> = {}): Promise<T | null> {
        const results = await this.read({ ...options, take: 1 });
        return results[0] || null;
    }

    async readWithCount(options: QueryOptions<T> = {}): Promise<[T[], number]> {
        const findOptions: FindManyOptions<T> = {
            where: options.where,
            order: options.order,
            take: options.take,
            skip: options.skip,
            select: options.select,
            relations: options.relations
        };

        const cleanedOptions = this.cleanFindOptions(findOptions);
        return this.repository.findAndCount(cleanedOptions);
    }

    async update(
        options: QueryOptions<T> = {},
        updateData: DeepPartial<T>
    ): Promise<T[]> {
        const entities = await this.read(options);
        if (entities.length === 0) {
            return [];
        }

        const updatedEntities = entities.map(entity => ({
            ...entity,
            ...updateData
        }));
        await this.repository.save(updatedEntities);
        return this.read(options);
    }

    async delete(conditions: FindOptionsWhere<T> | T | T[]): Promise<number> {
        const where = await this.getWhereConditions(conditions);
        const result = await this.repository.delete(where);
        return result.affected || 0;
    }
}