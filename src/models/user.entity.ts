import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    HOST = "host",
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.HOST
    })
    role: UserRole
}