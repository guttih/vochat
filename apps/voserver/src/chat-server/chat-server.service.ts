import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatSession } from '../entities/chat-session.entity';

import * as OpenTok from 'opentok';
import { ChatSessionService } from '../chat-session/chat-session.service';
import { ChatTokenService } from '../chat-token/chat-token.service';
import { ChatToken } from '../entities/chat-token.entity';

@Injectable()
export class ChatServerService {
    private openTokServer = null;
    private apiKey = '46968744';
    private secret = '1452ff8c4f73d72004865a2a49b8821511aca79f';
    constructor(
        private readonly tokenRepository: ChatTokenService,
        private readonly sessionRepository: ChatSessionService
    ) {
        console.log('ChatServerService constructor running');
        console.log('OpenTok server');
        this.openTokServer = new OpenTok(this.apiKey, this.secret);
        console.log('done creating OpenTok');
    }

    async createdServer() {
        /*const n = 1;
        const session = new ChatSession();
        session.id = `s${n}`;
        session.name = `t${n}name`;
        session.description = `des for s${n}`;
        session.apiKey = this.apiKey;
        await this.sessionRepository.create(session);
        */
        return { server: this.openTokServer };
    }

    async createToken(sessionId: string): Promise<string> {
        const token = await this.openTokServer.generateToken(sessionId);
        console.log(`created token:"${token}" for session "${sessionId}".`);
        return token;
    }
}
