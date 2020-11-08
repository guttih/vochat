import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ChatSessionService } from './chat-session.service';
import { ChatSession } from '../entities/chat-session.entity';

@Resolver((of) => ChatSession)
export class ChatSessionResolver {
    constructor( @Inject(ChatSessionService) private sessionService: ChatSessionService ){}

    //  List all tokens
    //  Playground example query: 
    //    { sessions{id name description mediaMode archiveMode active apiKey} }
    @Query(() => [ChatSession])
    async sessions() {
        return this.sessionService.findAll();
    }

    //  List all tokens
    //  Playground example query: 
    //    { sessionsByActive(active: true) { id name } }
    @Query(() => [ChatSession])
    async sessionsByActive(@Args('active', { type: () => Boolean }) active: boolean) {
        return this.sessionService.findActive(active);
    }

}
