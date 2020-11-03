import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatToken } from '../entities/chat-token.entity';
import { ChatTokenController } from './chat-token.controller';
import { ChatTokenService } from './chat-token.service';

@Module({
  imports:[TypeOrmModule.forFeature([ChatToken])],
  controllers: [ChatTokenController],
  providers: [ChatTokenService]
})
export class ChatTokenModule {}
