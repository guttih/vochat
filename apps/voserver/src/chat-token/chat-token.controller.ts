import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { CreateChatTokenDto } from '../models/chat-token.models';
import { ChatTokenService } from './chat-token.service';

@Controller('token')
export class ChatTokenController {
    constructor(private readonly chatTokenService: ChatTokenService){}

    @Get()
    listAll() {
        return this.chatTokenService.findAll()
    }

    @Get(':id')
    @ApiCreatedResponse({type: CreateChatTokenDto})
    getItem( @Param('id') mId:string ) {
        return this.chatTokenService.getItem(mId);
    }

    /*
    @Post()
    @ApiBody({type: CreateChatTokenDto})
    @ApiCreatedResponse({ description: 'Registers a chat-token'})
    Create( @Body(ValidationPipe) Credentials: CreateChatTokenDto ) {
        return this.chatTokenService.create(Credentials);
    }

    
    @Put(':id')
    @ApiBody({type: CreateChatTokenDto})
    @ApiResponse({type: CreateChatTokenDto})
    updateItem( @Param('id') mid:string, @Body(ValidationPipe) Credentials: CreateChatTokenDto ) {
        return this.chatTokenService.update(mid, Credentials);
    }*/
    
    @Delete(':id')
    @ApiOkResponse()
    deleteItem( @Param('id') mid:string) {
        return this.chatTokenService.delete(mid);
    }

}
