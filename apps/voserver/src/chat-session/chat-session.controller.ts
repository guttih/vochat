import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateChatSessionDto } from '../models/chat-session.models';
import { ChatSessionService } from './chat-session.service';

@Controller('session')
export class ChatSessionController {
    constructor(private readonly chatSessionService: ChatSessionService){}

    @Get()
    @ApiOperation({description:'Lists all stored sessions'})
    @ApiCreatedResponse({type:[CreateChatSessionDto]})
    listAll() {
        return this.chatSessionService.findAll()
    }

    @Get(':id')
    @ApiOperation({description:'Gets a specific session'})
    @ApiCreatedResponse({type: CreateChatSessionDto})
    getItem( @Param('id') id:string ) {
        return this.chatSessionService.getItem(id);
    }

    /* ChatServerService should create Sessions
    @Post()
    @ApiBody({type: CreateChatSessionDto})
    @ApiCreatedResponse({ description: 'Registers a chat-session'})
    Create( @Body(ValidationPipe) Credentials: CreateChatSessionDto ) {
        return this.chatSessionService.create(Credentials);
    }
    */
    
    @Put(':id')
    @ApiOperation({description:'Modifies values of a specific session.  Warning, modifying the id, could result in a stored session which does not exist on the Chat server.'})
    @ApiBody({type: CreateChatSessionDto})
    @ApiResponse({type: CreateChatSessionDto})
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
