import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChatSession } from '../entities/chat-session.entity';
import { ChatToken } from '../entities/chat-token.entity';
import { CreateChatSessionDto } from '../models/chat-session.models';
import { ChatSessionService } from './chat-session.service';

@Controller('sessions')
export class ChatSessionController {
    constructor(private readonly chatSessionService: ChatSessionService){}

    @Get()
    @ApiOperation({description:'Lists all stored sessions'})
    @ApiOkResponse({type:[ChatSession]})
    listAll() {
        return this.chatSessionService.findAll()
    }

    @Get('active')
    @ApiOperation({description:'List all active sessions'})
    @ApiOkResponse({type:[ChatSession]})
    listActive() {
        return this.chatSessionService.findActive(true)
    }

    @Get('in-active')
    @ApiOperation({description:'List all in-active sessions'})
    @ApiOkResponse({type:[ChatSession]})
    listInActive() {
        return this.chatSessionService.findActive(false)
    }

    @Get('tokens:sessionId')
    @ApiOperation({description:'Lists all tokens belonging to a specific session'})
    @ApiCreatedResponse({type:[ChatToken]})
    listTokens(@Param('sessionId') sessionId:string) {
        return this.chatSessionService.findSessionTokens(sessionId)
    }

    @Get(':id')
    @ApiOperation({description:'Gets a specific session'})
    @ApiCreatedResponse({type: ChatSession})
    getItem( @Param('id') id:string ) {
        return this.chatSessionService.getItem(id);
    }

    //  todo: ChatServerController should create Sessions not ChatSessionController
    @Post()
    @ApiBody({type: CreateChatSessionDto})
    @ApiCreatedResponse({ type: ChatSession, description: 'Registers a chat-session'})
    Create( @Body(ValidationPipe) userValidatedValues: CreateChatSessionDto ) {
        return this.chatSessionService.create(userValidatedValues);
    }
    
    
    @Put(':id')
    @ApiOperation({description:'Modifies values of a specific session.  Warning, modifying the id, could result in a stored session which does not exist on the Chat server.'})
    @ApiBody({type: CreateChatSessionDto})
    @ApiOkResponse({type: ChatSession})
    updateItem( @Param('id') id:string, @Body(ValidationPipe) userValidatedValues: CreateChatSessionDto ) {
        return this.chatSessionService.update(id, userValidatedValues);
    }
    
    @Delete(':id')
    @ApiOperation({description:'Removes a session from the database.'})
    @ApiOkResponse()
    deleteItem( @Param('id') mid:string) {
        return this.chatSessionService.delete(mid);
    }

}
