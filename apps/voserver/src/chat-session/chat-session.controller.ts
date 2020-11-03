import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { CreateChatSessionDto } from '../models/chat-session.models';
import { ChatSessionService } from './chat-session.service';

@Controller('session')
export class ChatSessionController {
    constructor(private readonly chatSessionService: ChatSessionService){}

    @Get()
    listAll() {
        return this.chatSessionService.findAll()
    }

    @Get(':id')
    @ApiCreatedResponse({type: CreateChatSessionDto})
    getItem( @Param('id') mId:string ) {
        return this.chatSessionService.getItem(mId);
    }


    @Post()
    @ApiBody({type: CreateChatSessionDto})
    @ApiCreatedResponse({ description: 'Registers a chat-session'})
    Create( @Body(ValidationPipe) Credentials: CreateChatSessionDto ) {
        return this.chatSessionService.create(Credentials);
    }

    
    @Put(':id')
    @ApiBody({type: CreateChatSessionDto})
    @ApiResponse({type: CreateChatSessionDto})
    updateItem( @Param('id') mid:string, @Body(ValidationPipe) Credentials: CreateChatSessionDto ) {
        return this.chatSessionService.update(mid, Credentials);
    }
    
    @Delete(':id')
    @ApiOkResponse()
    deleteItem( @Param('id') mid:string) {
        return this.chatSessionService.delete(mid);
    }

    @Post('postall')
    @ApiBody({type: CreateChatSessionDto})
    postall(@Req() request: Request): string {
        return request.body;
      }

}
