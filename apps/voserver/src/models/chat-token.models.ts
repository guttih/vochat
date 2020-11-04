import { IsString,MinLength, IsDateString, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ChatToken } from '../entities/chat-token.entity';


export class CreateServerChatTokenDto {
     
  @ApiProperty({ type: String, description: 'Id of the session this token is assigned to.', example:'sessionIdNumber1'})
  @IsString({ message: 'Value of session should be a string' })
  @MinLength(1, { message: 'Session is missing.' })
  sessionId: string;
  
  @ApiProperty({ type: String, description: 'Token name for clients to see' , example:'John'})
  @IsString({ message: 'Value of name should be a string' })
  @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
  name: string;

  @ApiProperty({ type: Number, description: 'Token issued role. Where 0=subscriber, 1=publisher and  2=moderator', example:1})
  @IsNumber()
  @Min(0,{message:"Number can't be lower than 0."})
  @Max(2,{message:"Number can't be higher than 2."})
  role: number;

  @ApiProperty({ type: String, description: 'The application key this session belongs to', example:new Date().toISOString()})
  @IsDateString({ message: `expires must be a date. Valid date example: ${new Date().toISOString()}` })
  expires: string;

  public static ValuesToEntity(values:CreateServerChatTokenDto, tokenText:string):ChatToken {
    const ret = new ChatToken();
    ret.token = tokenText;
    ret.name = values.name;
    ret.role = values.role;
    ret.sessionId = values.sessionId;
    ret.expires = new Date(values.expires);
    return ret;
  }

}

export class CreateChatTokenDto extends CreateServerChatTokenDto {

  @ApiProperty({ type: Number, description: 'ChatToken id', example:1})
  @IsNumber()
  @Min(1, { message: "Smallest value form token id, is 1." })
  id: number;

  @ApiProperty({ type: String, description: 'ChatToken text' })
  @IsString()
  @MinLength(10, { message: "Invalid token, it's to short" })
  token: string;

  public static ValuesToEntity(values:CreateChatTokenDto):ChatToken { 

    return super.ValuesToEntity(values, values.token);
  }

}
