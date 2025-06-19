import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import 'reflect-metadata';
import { EMPLOYEE_ROLE_ENUM_NAME, EmployeeRole } from './enum/employee-role.js';
import { TradingPoint } from './trading-point.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'employees' })
export class Employee {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({
        name: 'full_name',
        type: 'varchar',
        length: 100,
        nullable: false
    })
    fullName!: string;

    @Field()
    @Column({
        type: 'enum',
        enum: EmployeeRole,
        enumName: EMPLOYEE_ROLE_ENUM_NAME,
        nullable: false
    })
    role!: EmployeeRole;

    @Field()
    @ManyToOne(() => TradingPoint)
    @JoinColumn({
        name: 'trading_point_id'
    })
    tradingPoint!: TradingPoint;

    @Field()
    @Column({
        name: 'hire_date',
        type: 'date',
        default: () => 'CURRENT_DATE',
        nullable: false
    })
    hireDate!: Date;

    @Field()
    @Column({
        name: 'base_salary',
        type: 'numeric',
        precision: 10,
        scale: 2,
        nullable: false
    })
    baseSalary!: number;

    @Field({nullable: true})
    @Column({
        name: 'phone',
        type: 'varchar',
        length: 20,
        nullable: true
    })
    phone?: string;

    @Field({nullable: true})
    @Column({
        name: 'email',
        type: 'varchar',
        length: 100,
        nullable: true
    })
    email?: string;

    @Field()
    @Column({
        name: 'active',
        type: 'boolean',
        default: true,
        nullable: false
    })
    active!: boolean;
    
    constructor(data?: {
        fullName: string;
        role: EmployeeRole;
        tradingPoint: TradingPoint;
        hireDate?: Date;
        baseSalary: number;
        phone?: string;
        email?: string;
        active?: boolean;
    }) {
        if (data) {
            this.fullName = data.fullName;
            this.role = data.role;
            this.tradingPoint = data.tradingPoint;
            this.hireDate = data.hireDate ?? new Date();
            this.baseSalary = data.baseSalary;
            this.phone = data.phone;
            this.email = data.email;
            this.active = data.active ?? true;
        }
    }
}