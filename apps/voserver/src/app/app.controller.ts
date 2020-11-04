import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Hello } from '../models/Hello';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @ApiOkResponse({type:Hello})
  @ApiOperation({description:'A function that could be used to test if this service is responding.'})
  getData() {
    return this.appService.getData();
  }

  @Get('config')
  getConfig() {
    return this.appService.getConfig();
  }
}
