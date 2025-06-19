import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import "reflect-metadata"
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'users' })
export class User {
    @Field(() => ID)
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id!: number;

    @Field()
    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    email!: string;

    @Field()
    @Column({
        type: 'varchar',
        length: 255
    })
    password!: string;

    @Field()
    @Column({
        name: 'refresh_token',
        type: 'text',
        nullable: true
    })
    refreshToken?: string;

    @Field()
    @Column({
        name: 'reset_token',
        type: 'text',
        nullable: true
    })
    resetToken?: string;

    @Field()
    @CreateDateColumn({
        name: 'registration_date',
        type: 'timestamp',
        default: () => 'CURRENT_DATE'
    })
    registrationDate!: Date;

    @Field({ nullable: true })
    @UpdateDateColumn({
        name: 'last_login',
        type: 'timestamp',
        nullable: true
    })
    lastLogin?: Date;

    constructor(data?: { email: string; password: string; resetToken?: string }) {
        if (data) {
            this.email = data.email;
            this.password = data.password;
            this.resetToken = data.resetToken;
        }
    }
}