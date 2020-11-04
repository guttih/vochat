import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChatToken } from '../entities/chat-token.entity';
import { CreateChatTokenDto } from '../models/chat-token.models';
import { ChatTokenService } from './chat-token.service';

@Controller('token')
export class ChatTokenController {
    constructor(private readonly chatTokenService: ChatTokenService){}

    @Get()
    @ApiOperation({description:'Lists all tokens saved in the database'})
    @ApiOkResponse({type:[ChatToken]})
    listAll() {
        return this.chatTokenService.findAll()
    }
    
    @Get(':id')
    @ApiOperation({description:'Gets a specific token from the database.'})
    @ApiOkResponse({type: ChatToken})
    getItem(@Param('id') id:number ) {
        return this.chatTokenService.getItem(id);
    }

    // todo: ChatServerController should create Tokens not ChatSessionController
    @Post()
    @ApiBody({type: CreateChatTokenDto})
    @ApiOkResponse({ type:ChatToken, description: 'Registers a chat-token'})
    Create( @Body(ValidationPipe) userValidatedValues: CreateChatTokenDto ) {
        return this.chatTokenService.create(CreateChatTokenDto.ValuesToEntity(userValidatedValues));
    }
    
    
    @Put(':id')
    @ApiOperation({description:'Modifies values of a specific token.  Warning, modifying the token or the sessionId, could result in a stored token for a session which does not exist on the Chat server.'})
    @ApiBody({type: CreateChatTokenDto})
    @ApiOkResponse({type: ChatToken, description: 'modified values as they are stored in the database.'})
    updateItem( @Param('id') id:number, @Body(ValidationPipe) userValidatedValues: CreateChatTokenDto ) {

        return this.chatTokenService.update(id, CreateChatTokenDto.ValuesToEntity(userValidatedValues));
    }
    
    @Delete(':id')
    @ApiOperation({description:'Deletes a specific token from the database.'})
    @ApiOkResponse()
    deleteItem( @Param('id') id:string) {
        return this.chatTokenService.delete(id);
    }

}
