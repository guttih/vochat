import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiskFunctionsModule } from '@advania/disk-functions';
import { ChatSession } from '../entities/chat-session.entity';
//import { ChatToken } from '../entities/chat-token.entity';
//import { Moderator } from '../entities/moderator.entity';
import { DatabaseSettings } from '../ormconfig';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ChatSessionModule } from '../chat-session/chat-session.module';
//import { ModeratorModule } from '../moderator/moderator.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '.', 'assets'),
    exclude: ['/api*'],
  }),
    DiskFunctionsModule,
    ChatSessionModule,
    TypeOrmModule.forRoot({
      type: DatabaseSettings.type,
      host: DatabaseSettings.host,
      port: DatabaseSettings.port,
      username: DatabaseSettings.username,
      password: DatabaseSettings.password,
      database: DatabaseSettings.database,
      synchronize: DatabaseSettings.synchronize,
      entities: [/*ChatToken,*/ ChatSession/*, Moderator*/],
    }),
    ChatSessionModule,
  ],
  controllers: [AppController],
  providers: [AppService, DiskFunctionsModule],
})
export class AppModule {}
