import { IsString, Max, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ChatSession } from '../entities/chat-session.entity';

export class CreateServerChatSessionDto {
    @ApiProperty({ type: String, description: 'Session name for clients to see', example:'Technical assistant from Gudjon'})
    @IsString({ message: 'Value of name should be a string' })
    @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
    name: string;

    @ApiProperty({type: String, description: 'Session description for clients to see', example: 'Get personal technical assistant from our experts.'})
    description: string;

    @ApiProperty({ type: Number, description: 'Session will transmit streams using the OpenTok Media Router ("routed") or not ("relayed"). 0 = relayed, 1 =routed', example: 0})
    @Min(0, { message: 'minimum value is 0,  which represents relayed .' })
    @Max(1, { message: 'Maximum value is 1, which represents routed' })
    mediaMode: number;

    @ApiProperty({ type: Boolean, description: 'Session will be automatically archived (recorded)', example:false })
    archiveMode: boolean;

    constructor(name: string, description: string, mediaMode: number, archiveMode: boolean) {
        this.name = name;
        this.description = description;
        this.mediaMode = mediaMode;
        this.archiveMode = archiveMode;
    }
}

export class CreateChatSessionDto extends CreateServerChatSessionDto {
    @ApiProperty({ type: String, description: 'ChatSession identifier', example:'s1' })
    @IsString()
    @MinLength(1, { message: 'id is missing.'})
    id: string;
    @ApiProperty({ type: String, description: 'The application key this session belongs to', example:'12345678' })
    @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
    apiKey: string;

    constructor(
        id: string,
        name: string,
        description: string,
        mediaMode: number,
        archiveMode: boolean,
        apiKey: string
    ) {
        super(name, description, mediaMode, archiveMode);
        this.id = id;
        this.apiKey = apiKey;
    }

    ToEntity() {
        return CreateChatSessionDto.ValuesToEntity(this);
    }

    public static ValuesToEntity(values:CreateChatSessionDto):ChatSession {
        const ret = new ChatSession();
        ret.id = values.id;
        ret.name = values.name;
        ret.description = values.description;
        ret.mediaMode = values.mediaMode === 0 ? 'relayed' : 'routed';
        ret.archiveMode = values.archiveMode ? 'always' : 'manual';
        ret.apiKey = values.apiKey;

        return ret;
      }
}
