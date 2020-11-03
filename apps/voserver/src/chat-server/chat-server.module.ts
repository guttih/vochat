import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatSession } from '../entities/chat-session.entity';
import { ChatServerController } from './chat-server.controller';
import { ChatServerService } from './chat-server.service';

@Module({
  imports:[TypeOrmModule.forFeature([ChatSession])],
  controllers: [ChatServerController],
  providers: [ChatServerService]
})
export class ChatServerModule {}
