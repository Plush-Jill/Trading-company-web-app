import { In } from "typeorm";
export class BaseService {
    repository;
    dataSource;
    constructor(dataSource, entity) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(entity);
    }
    async getWhereConditions(conditions) {
        if (Array.isArray(conditions)) {
            const ids = conditions
                .filter(entity => entity.id)
                .map(entity => entity.id);
            return { id: In(ids) };
        }
        if ('id' in conditions) {
            return { id: conditions.id };
        }
        return conditions;
    }
    cleanFindOptions(options) {
        const cleaned = {};
        Object.keys(options).forEach(key => {
            if (options[key] !== undefined) {
                cleaned[key] = options[key];
            }
        });
        return cleaned;
    }
    async create(data) {
        const entity = this.repository.create(data);
        return await this.repository.save(entity);
    }
    async read(options = {}) {
        const findOptions = {
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
    async readOne(options = {}) {
        const results = await this.read({ ...options, take: 1 });
        return results[0] || null;
    }
    async readWithCount(options = {}) {
        const findOptions = {
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
    async update(options = {}, updateData) {
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
    async delete(conditions) {
        const where = await this.getWhereConditions(conditions);
        const result = await this.repository.delete(where);
        return result.affected || 0;
    }
}
