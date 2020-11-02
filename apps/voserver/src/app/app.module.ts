import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { TodosModule } from './todos/todos.module';
import { DiskFunctionsModule } from '@advania/disk-functions';
import { ChatToken } from '../entities/ChatToken.entity';
import { ChatSession } from '../entities/ChatSession.entity';
import { Moderators } from '../entities/moderator.entity';
import { DatabaseSettings } from '../ormconfig';


//TS2322: Type 'string' is not assignable to type '"postgres" | "mysql" | "mariadb" | "cockroachdb" | "sqlite" | "mssql" | "sap" | "oracle" | "cordova" | "nativescript" | "react-native" | "sqljs" | "mongodb" | "aurora-data-api" | "aurora-data-api-pg" | "expo" | "better-sqlite3"'.
@Module({
  imports: [DiskFunctionsModule,
    TodosModule, 
    TypeOrmModule.forRoot({
      type       : DatabaseSettings.type,
      host       : DatabaseSettings.host,
      port       : DatabaseSettings.port,
      username   : DatabaseSettings.username,
      password   : DatabaseSettings.password,
      database   : DatabaseSettings.database,
      synchronize: DatabaseSettings.synchronize,
      entities   : [Todo, ChatToken, ChatSession, Moderators],
  })],
  controllers: [AppController],
  providers: [AppService, DiskFunctionsModule],
})
export class AppModule {}