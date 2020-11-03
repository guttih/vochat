import { Controller,  Get, Param,  } from '@nestjs/common';
import { } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ChatServerService } from './chat-server.service';

@Controller('server')
export class ChatServerController {
    constructor(private readonly chatServerService: ChatServerService){}

    @Get()
    getServer() {
        return this.chatServerService.createdServer();
    }
    @Get('create-token:id')
    @ApiCreatedResponse({ description: 'Token created'})
    createToken( @Param('id') id:string ) {
        console.log('chat-server controller got id',id);
        return this.chatServerService.createToken(id);
    }
}
