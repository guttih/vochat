import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatToken } from '../entities/chat-token.entity';
import { ChatTokenController } from './chat-token.controller';
import { ChatTokenService } from './chat-token.service';
import { ChatTokenResolver } from './chat-token.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([ChatToken])],
  controllers: [ChatTokenController],
  providers: [ChatTokenService, ChatTokenResolver ],
  exports:[ChatTokenService]
})
export class ChatTokenModule {}
