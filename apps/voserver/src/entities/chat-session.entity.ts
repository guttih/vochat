import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { ChatToken } from './chat-token.entity';
import { ObjectType, Field } from '@nestjs/graphql';


// https://tokbox.com/developer/guides/create-session/node/

@ObjectType()
@Entity('sessions')
export class ChatSession {
  
  @Field()
  @PrimaryColumn()
  @ApiProperty({ type: String, description: 'ChatSession identifier', example:'s1' })
  id: string;

  @Field()
  @ApiProperty({ type: String, description: 'Session name for clients to see', example:'Technical assistant from Gudjon'})
  @Column()
  name: string;

  @Field()
  @ApiProperty({type: String, description: 'Session description for clients to see', example: 'Get personal technical assistant from our experts.'})
  @Column()
  description: string;
  
  @Field()
  @ApiProperty({ type: String, description: 'Session will transmit streams using the OpenTok Media Router ("routed") or not ("relayed").', example: 'relayed'})
  @Column()
  mediaMode:  string;
  
  @Field()
  @ApiProperty({ type: String, description: 'Session will be automatically archived, ("always") or not ("manual").', example:'manual' })
  @Column()
  archiveMode: string;

  @Field()
  @ApiProperty({ type: Boolean, description: 'Is the session currently active', example:false })
  @Column()
  active:boolean
  
  @Field()
  @Column()
  apiKey: string;
  
  //Sessions never expire but tokens to
  //@OneToMany(() => ChatToken, token => token.session)
  //tokens: ChatToken[];

}
