import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
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