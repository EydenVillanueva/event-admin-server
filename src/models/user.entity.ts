import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export type UserRoleType = 'admin' | 'host';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'enum' })
    password: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({
        type: 'enum',
        enum: ['admin', 'host'],
        default: 'host'
    })
    role: UserRoleType;
};