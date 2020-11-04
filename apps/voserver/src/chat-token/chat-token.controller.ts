import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateChatTokenDto } from '../models/chat-token.models';
import { ChatTokenService } from './chat-token.service';

@Controller('token')
export class ChatTokenController {
    constructor(private readonly chatTokenService: ChatTokenService){}

    @Get()
    @ApiOperation({description:'Lists all tokens saved in the database'})
    @ApiCreatedResponse({type:[CreateChatTokenDto]})
    listAll() {
        return this.chatTokenService.findAll()
    }

    @Get(':id')
    @ApiOperation({description:'Gets a specific token from the database.'})
    @ApiCreatedResponse({type: CreateChatTokenDto})
    getItem( @Param('id') id:string ) {
        return this.chatTokenService.getItem(id);
    }

    /* // ChatServerService should create tokens
    @Post()
    @ApiBody({type: CreateChatTokenDto})
    @ApiCreatedResponse({ description: 'Registers a chat-token'})
    Create( @Body(ValidationPipe) Credentials: CreateChatTokenDto ) {
        return this.chatTokenService.create(Credentials.ToEntity());
    }
    */
    
    @Put(':id')
    @ApiOperation({description:'Modifies values of a specific token.  Warning, modifying the token or the sessionId, could result in a stored token for a session which does not exist on the Chat server.'})
    @ApiBody({type: CreateChatTokenDto})
    @ApiResponse({type: CreateChatTokenDto})
    updateItem( @Param('id') id:string, @Body(ValidationPipe) userValidatedValues: CreateChatTokenDto ) {

        return this.chatTokenService.update(id, CreateChatTokenDto.ValuesToEntity(userValidatedValues));
    }
    
    @Delete(':id')
    @ApiOperation({description:'Deletes a specific token from the database.'})
    @ApiOkResponse()
    deleteItem( @Param('id') id:string) {
        return this.chatTokenService.delete(id);
    }

}
