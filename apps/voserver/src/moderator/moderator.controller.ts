import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { CreateModeratorDto } from '../models/moderator.models';
import { ModeratorService } from './moderator.service';

@Controller('moderator')
export class ModeratorController {
    constructor(private readonly moderatorService: ModeratorService){}

    @Get()
    listAll() {
        return this.moderatorService.findAll()
    }

    @Get(':id')
    @ApiCreatedResponse({type: CreateModeratorDto})
    getItem( @Param('id') mId:string ) {
        return this.moderatorService.getItem(mId);
    }


    @Post()
    @ApiBody({type: CreateModeratorDto})
    @ApiCreatedResponse({ description: 'Registers a moderator'})
    Create( @Body(ValidationPipe) Credentials: CreateModeratorDto ) {
        return this.moderatorService.create(Credentials);
    }

    
    @Put(':id')
    @ApiBody({type: CreateModeratorDto})
    @ApiResponse({type: CreateModeratorDto})
    updateItem( @Param('id') mid:string, @Body(ValidationPipe) Credentials: CreateModeratorDto ) {
        return this.moderatorService.update(mid, Credentials);
    }
    
    @Delete(':id')
    @ApiOkResponse()
    deleteItem( @Param('id') mid:string) {
        return this.moderatorService.delete(mid);
    }

}
