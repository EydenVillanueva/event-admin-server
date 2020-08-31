import { Module } from '@nestjs/common';
import { InvitationsController } from './invitations.controller';
import { InvitationsService } from './invitations.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EventsRepository} from "../events/events.repository";

@Module({
  imports: [
      TypeOrmModule.forFeature([EventsRepository])
  ],
  controllers: [InvitationsController],
  providers: [InvitationsService]
})
export class InvitationsModule {}
