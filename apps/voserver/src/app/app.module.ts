import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiskFunctionsModule } from '@advania/disk-functions';
import { ChatToken } from '../entities/chat-token.entity';
import { ChatSession } from '../entities/chat-session.entity';
import { Moderator } from '../entities/moderator.entity';
import { DatabaseSettings } from '../ormconfig';
import { ModeratorModule } from '../moderator/moderator.module';

@Module({
  imports: [
    DiskFunctionsModule,
    ModeratorModule,
    TypeOrmModule.forRoot({
      type: DatabaseSettings.type,
      host: DatabaseSettings.host,
      port: DatabaseSettings.port,
      username: DatabaseSettings.username,
      password: DatabaseSettings.password,
      database: DatabaseSettings.database,
      synchronize: DatabaseSettings.synchronize,
      entities: [ChatToken, ChatSession, Moderator],
    }),
    ModeratorModule,
  ],
  controllers: [AppController],
  providers: [AppService, DiskFunctionsModule],
})
export class AppModule {}
