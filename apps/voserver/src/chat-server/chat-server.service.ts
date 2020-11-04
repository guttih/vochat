import { Injectable } from '@nestjs/common';
import * as OpenTok from 'opentok';
import { ChatSessionService } from '../chat-session/chat-session.service';
import { ChatTokenService } from '../chat-token/chat-token.service';
import { CreateChatSessionDto, CreateServerChatSessionDto } from '../models/chat-session.models';
import { CreateServerChatTokenDto } from '../models/chat-token.models';


type ChatTokenOptions = {
    role :                   string;
    expireTime :             number;
    data :                   string;
    initialLayoutClassList : Array<string>;
  }

@Injectable()
export class ChatServerService {
    public openTokServer = null;
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
        
        return { server: this.openTokServer };
    }

    createSession(userValues: CreateServerChatSessionDto): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const repo = this.sessionRepository;
            const apiKey = this.apiKey;

            
            //https://tokbox.com/developer/sdks/node/reference/OpenTok.html#createSession
            this.openTokServer.createSession(async function (err, session) {
                if (err) {
                    console.log('errroooor', err);
                    reject('Could not create session on the server');
                } else {
                    /* //2_MX40Njk2ODc0NH5-MTYwNDQzNzE5NDE3OX5SZS9KWlpRckZUcm83TGtyb2pYYStBSm5-UH4
                    sessionId: '1_MX40Njk2ODc0NH5-MTYwNDQzNjgzMzE0Mn4zR0dCa1lwYUVsZUhpS0FVaTAwWGxFcWd-UH4',
                    mediaMode: 'relayed',
                    archiveMode: 'manual'
                  */
                    const sessionId = session.sessionId;
                    console.log('created session on server', sessionId);

                    const sessionDto = new CreateChatSessionDto(
                        sessionId,
                        userValues.name,
                        userValues.description,
                        userValues.mediaMode,
                        userValues.archiveMode,
                        apiKey
                    );
                   
                    await repo.create(sessionDto);
                    console.log(`saved session to db`);
                    resolve(sessionId);
                }
            });
        });
    }

    private roleToString(role: number) {
        //https://tokbox.com/developer/sdks/node/reference/OpenTok.html#createSession
        switch (role) {
            case 2:
                return 'moderator'; // 2  In addition to the privileges granted to a publisher, in clients using the OpenTok.js library, a moderator can call the forceUnpublish() and forceDisconnect() method of the Session object.
            case 0:
                return 'subscriber'; // 0   A subscriber can only subscribe to streams.
            default:
                return 'publisher'; // 1    A publisher can publish streams, subscribe to streams, and signal. (This is the default value if you do not specify a role.)
        }
    }

    private ExpiredDateTimeToUnixEpochSeconds(date: Date): number {
        // (new Date().getTime() / 1000)+(7 * 24 * 60 * 60), // in one week

        return date.getTime() / 1000;
    }

    private makeChatTokenOptions(dto: CreateServerChatTokenDto): ChatTokenOptions {
        return {
            role: this.roleToString(dto.role),
            expireTime: this.ExpiredDateTimeToUnixEpochSeconds(new Date(dto.expires)),
            data: `name=${dto.name}`,
            initialLayoutClassList: ['focus'], //just hardcode it for now
        };
    }
                           
    public async createToken(dto: CreateServerChatTokenDto): Promise<string> {
        
        
        const generateTokenOptions = this.makeChatTokenOptions(dto);
        console.log(`creating token for session ${dto.sessionId} with options`, generateTokenOptions);
        const tokenText = this.openTokServer.generateToken(dto.sessionId, generateTokenOptions);

        const tokenEntity = CreateServerChatTokenDto.ValuesToEntity(dto, tokenText);
        await this.tokenRepository.create(tokenEntity);
        return tokenText;
    }
    
}
