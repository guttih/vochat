import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiskFunctionsModule } from '@advania/disk-functions';
import { ChatSession } from '../entities/chat-session.entity';
//import { ChatToken } from '../entities/chat-token.entity';
import { DatabaseSettings } from '../ormconfig';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ChatSessionModule } from '../chat-session/chat-session.module';
import { ChatServerModule } from '../chat-server/chat-server.module';
import { ChatTokenModule } from '../chat-token/chat-token.module';
import { ChatToken } from '../entities/chat-token.entity';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            autoSchemaFile: 'schema.gql',
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '.', 'assets'),
            exclude: ['/api*','/graphql*'],
        }),
        DiskFunctionsModule,
        ChatSessionModule,
        ChatTokenModule,
        ChatServerModule,
        TypeOrmModule.forRoot({
            type: DatabaseSettings.type,
            host: DatabaseSettings.host,
            port: DatabaseSettings.port,
            username: DatabaseSettings.username,
            password: DatabaseSettings.password,
            database: DatabaseSettings.database,
            synchronize: DatabaseSettings.synchronize,
            entities: [ChatSession, ChatToken],
        }),
    ],
    controllers: [AppController],
    providers: [AppService, DiskFunctionsModule],
})
export class AppModule {}
