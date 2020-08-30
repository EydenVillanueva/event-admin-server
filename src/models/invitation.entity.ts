import {BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";


export class Invitation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    numberGuests: number;

    @Column({ type: 'int' })
    arrivedGuests: number;

    @Column({ type: 'varchar', array: true })
    tableIds: string[]
}