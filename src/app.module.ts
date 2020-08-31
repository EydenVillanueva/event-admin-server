import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/typeorm.config";
import { EventsModule } from './events/events.module';
import { InvitationsModule } from './invitations/invitations.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      InvitationsModule,
      EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
