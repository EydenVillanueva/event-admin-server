import { BaseEntity } from "typeorm";
export declare class Invitation extends BaseEntity {
    id: number;
    numberGuests: number;
    arrivedGuests: number;
    tableIds: string[];
}
