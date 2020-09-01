import { Module } from '@nestjs/common';
import { InvitationsController } from './invitations.controller';
import { InvitationsService } from './invitations.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {InvitationsRepository} from "./invitations.repository";

@Module({
  imports: [
      TypeOrmModule.forFeature([InvitationsRepository])
  ],
  controllers: [InvitationsController],
  providers: [InvitationsService]
})
export class InvitationsModule {}
