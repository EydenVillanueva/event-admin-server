import {BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

export class Room extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 300})
    address: string;

    @Column({ type: 'int' })
    capacity: number;
}