import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";
import {Room} from "./room.entity";

@Entity()
export class Event extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'date' })
    eventDate: Date;

    @Column({ type: 'int' })
    assistance: number;

    @OneToOne(type => User)
    @JoinColumn()
    createdBy: User;

    @OneToOne( type => Room )
    @JoinColumn()
    room: Room;
}