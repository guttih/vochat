import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateChatSessionDto {
    

  @ApiProperty({ type: String, description: 'ChatSession identifier' })
  @IsString()
  @MinLength(1, { message: 'id is missing.' })
  id: string;

  @ApiProperty({ type: String, description: 'Session name for clients to see' })
  @IsString({ message: 'Value of name should be a string' })
  @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Session description for clients to see',
  })
  description: string;

  @ApiProperty({ type: String, description: 'The application key this session belongs to' })
  @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
  apiKey: string;
}
