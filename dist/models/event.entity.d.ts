import { BaseEntity } from "typeorm";
import { User } from "./user.entity";
import { Room } from "./room.entity";
export declare class Event extends BaseEntity {
    id: number;
    name: string;
    eventDate: Date;
    assistance: number;
    createdBy: User;
    room: Room;
}
