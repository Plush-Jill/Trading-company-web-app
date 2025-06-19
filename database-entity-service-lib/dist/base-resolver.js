var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Resolver, Query, Arg, Int, ArgsType, Field, ObjectType } from 'type-graphql';
import { Like, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, In, Not } from 'typeorm';
// Аргументы для пагинации
let PaginationArgs = class PaginationArgs {
    skip;
    take;
};
__decorate([
    Field(() => Int, { nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "skip", void 0);
__decorate([
    Field(() => Int, { nullable: true, defaultValue: 10 }),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "take", void 0);
PaginationArgs = __decorate([
    ArgsType()
], PaginationArgs);
export { PaginationArgs };
// Результат с пагинацией - generic тип
let PaginatedResponse = class PaginatedResponse {
    items;
    totalCount;
    hasNextPage;
    hasPreviousPage;
};
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], PaginatedResponse.prototype, "totalCount", void 0);
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], PaginatedResponse.prototype, "hasNextPage", void 0);
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], PaginatedResponse.prototype, "hasPreviousPage", void 0);
PaginatedResponse = __decorate([
    ObjectType()
], PaginatedResponse);
export { PaginatedResponse };
// Базовый резолвер - можно наследовать для любой сущности
export function createBaseResolver(suffix, entityClass, serviceClass) {
    let BaseResolverHost = class BaseResolverHost {
        service;
        constructor(dataSource) {
            this.service = new serviceClass(dataSource, entityClass);
        }
        // Преобразование простых фильтров в TypeORM условия
        buildWhereCondition(filter = {}) {
            const where = {};
            Object.keys(filter).forEach(key => {
                const value = filter[key];
                if (key.startsWith('_')) {
                    // Игнорируем служебные ключи на верхнем уровне
                    return;
                }
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    // Обработка специальных операторов
                    if (value._like) {
                        where[key] = Like(`%${value._like}%`);
                    }
                    else if (value._gt !== undefined) {
                        where[key] = MoreThan(value._gt);
                    }
                    else if (value._gte !== undefined) {
                        where[key] = MoreThanOrEqual(value._gte);
                    }
                    else if (value._lt !== undefined) {
                        where[key] = LessThan(value._lt);
                    }
                    else if (value._lte !== undefined) {
                        where[key] = LessThanOrEqual(value._lte);
                    }
                    else if (value._in !== undefined) {
                        where[key] = In(value._in);
                    }
                    else if (value._null !== undefined) {
                        where[key] = value._null ? null : Not(null);
                    }
                    else {
                        // Обычное равенство
                        where[key] = value;
                    }
                }
                else {
                    // Простое равенство
                    where[key] = value;
                }
            });
            return where;
        }
        // Общий метод для поиска
        async find(filter, orderBy, skip, take, relations) {
            const where = filter ? this.buildWhereCondition(JSON.parse(filter)) : {};
            const order = orderBy ? JSON.parse(orderBy) : {};
            return this.service.read({
                where,
                order,
                skip,
                take,
                relations
            });
        }
        // Поиск с пагинацией
        async findWithPagination(filter, orderBy, skip = 0, take = 10, relations) {
            const where = filter ? this.buildWhereCondition(JSON.parse(filter)) : {};
            const order = orderBy ? JSON.parse(orderBy) : {};
            const [items, totalCount] = await this.service.readWithCount({
                where,
                order,
                skip,
                take,
                relations
            });
            return {
                items,
                totalCount,
                hasNextPage: skip + take < totalCount,
                hasPreviousPage: skip > 0
            };
        }
        // Поиск одного элемента
        async findOne(filter, relations) {
            const where = this.buildWhereCondition(JSON.parse(filter));
            return this.service.readOne({ where, relations });
        }
        // Получение по ID (простой случай)
        async getById(id) {
            return this.service.readOne({ where: { id } });
        }
    };
    __decorate([
        Query(() => [entityClass], { name: `find${suffix}` }),
        __param(0, Arg('filter', () => String, { nullable: true })),
        __param(1, Arg('orderBy', () => String, { nullable: true })),
        __param(2, Arg('skip', () => Int, { nullable: true })),
        __param(3, Arg('take', () => Int, { nullable: true })),
        __param(4, Arg('relations', () => [String], { nullable: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number, Number, Array]),
        __metadata("design:returntype", Promise)
    ], BaseResolverHost.prototype, "find", null);
    __decorate([
        Query(() => Object, { name: `find${suffix}WithPagination` }) // Object потому что не можем сделать generic ObjectType
        ,
        __param(0, Arg('filter', () => String, { nullable: true })),
        __param(1, Arg('orderBy', () => String, { nullable: true })),
        __param(2, Arg('skip', () => Int, { nullable: true, defaultValue: 0 })),
        __param(3, Arg('take', () => Int, { nullable: true, defaultValue: 10 })),
        __param(4, Arg('relations', () => [String], { nullable: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number, Number, Array]),
        __metadata("design:returntype", Promise)
    ], BaseResolverHost.prototype, "findWithPagination", null);
    __decorate([
        Query(() => entityClass, { nullable: true, name: `find${suffix}One` }),
        __param(0, Arg('filter', () => String)),
        __param(1, Arg('relations', () => [String], { nullable: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Array]),
        __metadata("design:returntype", Promise)
    ], BaseResolverHost.prototype, "findOne", null);
    __decorate([
        Query(() => entityClass, { nullable: true, name: `get${suffix}ById` }),
        __param(0, Arg('id', () => Int)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], BaseResolverHost.prototype, "getById", null);
    BaseResolverHost = __decorate([
        Resolver(),
        __metadata("design:paramtypes", [Object])
    ], BaseResolverHost);
    return BaseResolverHost;
}
