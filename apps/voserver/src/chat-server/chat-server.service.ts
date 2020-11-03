import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatSession } from '../entities/chat-session.entity';

import * as OpenTok from 'opentok';

@Injectable()
export class ChatServerService {
  
  private openTokServer = null;

  constructor(
    @InjectRepository(ChatSession) private readonly repo: Repository<ChatSession>
  ) {
    
    console.log('OpenTok server')
    this.openTokServer = new OpenTok('46968744', '1452ff8c4f73d72004865a2a49b8821511aca79f');
    console.log('done creating OpenTok')
  }

   createdServer(){
     
    return {server:this.openTokServer}

  }

  
  async createToken(sessionId: string):Promise<string> {
    const token = await this.openTokServer.generateToken(sessionId);
    console.log(`created token:"${token}" for session "${sessionId}".`)
    return token;
  }

}
