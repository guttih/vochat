import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos/todo.entity';
import { TodosModule } from './todos/todos.module';
import { DiskFunctionsModule } from '@advania/disk-functions';

@Module({
  imports: [DiskFunctionsModule,
    TodosModule, 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'vochat',
    entities: [Todo],
    synchronize: true,
  })],
  controllers: [AppController, ],
  providers: [AppService, DiskFunctionsModule],
})
export class AppModule {}