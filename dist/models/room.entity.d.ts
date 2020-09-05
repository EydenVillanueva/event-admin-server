import { BaseEntity } from "typeorm";
export declare class Room extends BaseEntity {
    id: number;
    address: string;
    capacity: number;
}
