import { IsEnum, IsString, Max, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ChatSession } from '../entities/chat-session.entity';

export enum ChatSessionMediaMode {
    Relayed = "relayed",
    Routed = 'routed'
}

export class CreateServerChatSessionDto {
    @ApiProperty({ type: String, description: 'Session name for clients to see', example:'Technical assistant from Gudjon'})
    @IsString({ message: 'Value of name should be a string' })
    @MinLength(3, { message: 'Minimum length of a name is 3 characters.' })
    name: string;

    @ApiProperty({type: String, description: 'Session description for clients to see', example: 'Get personal technical assistant from our experts.'})
    description: string;

    @ApiProperty({ type: String, description: 'Session will transmit streams using the OpenTok Media Router ("routed") or not ("relayed").', example: 'relayed'})
    @IsEnum(ChatSessionMediaMode, {message: "mediaMode value must be 'routed' or 'relayed'."})
    mediaMode: string;

    @ApiProperty({ type: Boolean, description: 'Session will be automatically archived (recorded)', example:false })
    archiveMode: boolean;

    @ApiProperty({ type: Boolean, description: 'Is the session currently active', example:false })
    active: boolean;

    constructor(name: string, description: string, mediaMode: string, archiveMode: boolean, active: boolean) {
        this.name = name;
        this.description = description;
        this.mediaMode = mediaMode;
        this.archiveMode = archiveMode;
        this.active = active;
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
        mediaMode: string,
        archiveMode: boolean,
        active: boolean,
        apiKey: string
    ) {
        super(name, description, mediaMode, archiveMode, active);
        this.id = id;
        this.apiKey = apiKey;
    }

    public static ValuesToEntity(values:CreateChatSessionDto):ChatSession {
        const ret = new ChatSession();
        ret.id = values.id;
        ret.name = values.name;
        ret.description = values.description;
        ret.mediaMode = values.mediaMode;
        ret.archiveMode = values.archiveMode ? 'always' : 'manual';
        ret.active = values.active;
        ret.apiKey = values.apiKey;

        return ret;
      }
}
