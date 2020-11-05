
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

//see: comment: 'https://tokbox.com/developer/guides/basics/#token'

@ObjectType()
@Entity('tokens')
export class ChatToken  {
  
  @Field()
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: Number, description: 'ChatSession identifier', example:1 })
  id:number;

  @Field()
  @Column()
  @ApiProperty({ type: String, description: 'ChatToken text' })
  token: string;

  //@ManyToOne(()=> ChatSession, session => session.tokens)
  @Field()
  @Column()
  @ApiProperty({ type: String, description: 'Id of the session this token is assigned to.', example:'sessionIdNumber1'})
  sessionId:string;

  @Field()
  @Column()
  @ApiProperty({ type: String, description: 'Token name for clients to see' , example:'John'})
  name: string;

  @Field()
  @Column({ comment: '0 = subscriber, 1 = moderator, 2 = publisher. see: https://tokbox.com/developer/guides/basics/#publish' })
  @ApiProperty({ type: Number, description: 'Token issued role. Where 0=subscriber, 1=publisher and  2=moderator', example:1})
  role: number; 

  @Field()
  @Column()
  @ApiProperty({ type: String, description: 'The application key this session belongs to', example:new Date().toISOString()})
  expires: Date;

}
