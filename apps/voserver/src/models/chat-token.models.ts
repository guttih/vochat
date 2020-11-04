import { IsString,MinLength, IsDateString, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateChatTokenDto {
    
  
  @ApiProperty({ type: String, description: 'ChatToken identifier' })
  @IsString()
  @MinLength(10, { message: "Invalid token, it's to short" })
  id: string;

  @ApiProperty({ type: String, description: 'Id of the session this token is assigned to.' })
  @IsString({ message: 'Value of session should be a string' })
  @MinLength(1, { message: 'Session is missing.' })
  sessionId: string;
  
  @ApiProperty({ type: String, description: 'Token name for clients to see' })
  @IsString({ message: 'Value of name should be a string' })
  @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
  name: string;

  @ApiProperty({ type: Number, description: 'Token issued role', })
  @IsNumber()
  @Min(0,{message:"Number can't be lower than 0. Where 0:subscriber, 1:publisher, 2:moderator"})
  @Max(2,{message:"Number can't be higher than 2.  Where 0:subscriber, 1:publisher, 2:moderator"})
  role: number;

  @ApiProperty({ type: String, description: 'The application key this session belongs to' })
  @IsDateString({ message: `expires must be a date. Valid date example: ${new Date().toISOString()}` })
  expires: string;

}
