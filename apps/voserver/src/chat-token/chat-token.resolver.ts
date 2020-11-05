import { Inject} from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ResolveField, Parent, Int } from '@nestjs/graphql';
import { ChatToken } from '../entities/chat-token.entity';
import { ChatTokenService } from './chat-token.service';

@Resolver((of) => ChatToken)
export class ChatTokenResolver {
    constructor(@Inject(ChatTokenService) private tokenService: ChatTokenService) {}

    //  Get one token
    //  Playground example query: 
    //    { token(id:2){ id token sessionId name role expires }}
    @Query(returns => ChatToken)
    async token(@Args('id', { type: () => Int }) id: number) {
        return this.tokenService.getItem(id);
    }

    //  List all tokens
    //  Playground example query: 
    //    { tokenList { id token sessionId name role expires } }
    @Query(returns => [ChatToken])
        async tokenList() {
            return this.tokenService.findAll();
    }
}
