import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ModeratorRO {
  @IsString()
  id: string;

  @IsString()
  name: string;

  sessionIds: string;
}

export class CreateModeratorDto {
    
  constructor(id: string, name: string, sessionIds: string) {
    this.id = id;
    this.name = name;
    this.sessionIds = sessionIds;
  }

  @ApiProperty({ type: String, description: 'name' })
  @IsString({ message: 'Value of name should be a string' })
  @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Id of all sessions this moderator has',
  })
  sessionIds: string;
  @ApiProperty({ type: String, description: 'Moderator identifier' })
  @IsString()
  @MinLength(1, { message: 'id is missing.' })
  id: string;
}
