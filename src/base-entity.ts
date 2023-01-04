import { PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity{
    @PrimaryGeneratedColumn()
    id?: Number;
    createdAt: Date;
    updatedAt: Date;
}