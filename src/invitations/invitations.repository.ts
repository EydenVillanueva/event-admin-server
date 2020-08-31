import {EntityRepository, Repository} from "typeorm";
import {Invitation} from "../models/invitation.entity";

@EntityRepository(Invitation)
export class RoomsRepository extends Repository<Invitation>{

}