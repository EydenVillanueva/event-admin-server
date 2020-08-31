import {EntityRepository, Repository} from "typeorm";
import {Room} from "../models/room.entity";


@EntityRepository(Room)
export class RoomsRepository extends Repository<Room>{

}