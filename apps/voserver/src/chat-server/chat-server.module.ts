import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatSessionModule } from '../chat-session/chat-session.module';
import { ChatSessionService } from '../chat-session/chat-session.service';
import { ChatTokenModule } from '../chat-token/chat-token.module';
import { ChatTokenService } from '../chat-token/chat-token.service';
import { ChatSession } from '../entities/chat-session.entity';
import { ChatServerController } from './chat-server.controller';
import { ChatServerService } from './chat-server.service';

@Module({
  imports:[TypeOrmModule.forFeature([ChatSession, ChatSession]), ChatSessionModule, ChatTokenModule],
  controllers: [ChatServerController],
  providers: [ChatServerService, ChatSessionService]
})
export class ChatServerModule {}
