import { Controller,  Get, Param, Post, ValidationPipe,  } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { CreateServerChatSessionDto } from '../models/chat-session.models';
import { CreateServerChatTokenDto } from '../models/chat-token.models';
import { ChatServerService } from './chat-server.service';

@Controller('server')
export class ChatServerController {
    constructor(private readonly chatServerService: ChatServerService){}

    @Get()
    getServer() {
        return this.chatServerService.createdServer();
    }
    @Post('create-token')
    @ApiBody({ type: CreateServerChatTokenDto })
    @ApiCreatedResponse({type: String})
    //@ApiCreatedResponse({ description: 'Token created'})
    //CreateServerChatTokenDto
    createToken( @Body(ValidationPipe) userValidatedValues:CreateServerChatTokenDto ) {
        console.log('chat-server controller got values',userValidatedValues);
        return this.chatServerService.createToken(userValidatedValues);
    }

    @Post('create-session')
    @ApiBody({ type: CreateServerChatSessionDto })
    @ApiCreatedResponse({ description: 'session id' })
    Create(@Body(ValidationPipe) userValidatedValues: CreateServerChatSessionDto) {
        return this.chatServerService.createSession(userValidatedValues);
    }
}
