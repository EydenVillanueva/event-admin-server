import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RoomsRepository} from "./rooms.repository";

@Module({
  imports: [
      TypeOrmModule.forFeature([RoomsRepository])
  ],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}
