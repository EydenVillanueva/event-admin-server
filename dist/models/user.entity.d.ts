import { BaseEntity } from "typeorm";
export declare enum UserRole {
    ADMIN = "admin",
    HOST = "host"
}
export declare class User extends BaseEntity {
    id: number;
    name: string;
    password: string;
    email: string;
    role: UserRole;
}
