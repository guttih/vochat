import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatSession } from '../entities/chat-session.entity';
import { ChatSessionController } from './chat-session.controller';
import { ChatSessionService } from './chat-session.service';
import { ChatSessionResolver } from './chat-session.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([ChatSession])],
  controllers: [ChatSessionController],
  providers: [ChatSessionService, ChatSessionResolver],
})
export class ChatSessionModule {}
