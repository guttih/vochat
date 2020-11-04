
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//see: comment: 'https://tokbox.com/developer/guides/basics/#token'

@Entity('tokens')
export class ChatToken  {
  
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: Number, description: 'ChatSession identifier', example:1 })
  id:number;

  @Column()
  @ApiProperty({ type: String, description: 'ChatToken text' })
  token: string;

  //@ManyToOne(()=> ChatSession, session => session.tokens)
  @Column()
  @ApiProperty({ type: String, description: 'Id of the session this token is assigned to.', example:'sessionIdNumber1'})
  sessionId:string;

  @Column()
  @ApiProperty({ type: String, description: 'Token name for clients to see' , example:'John'})
  name: string;

  @Column({ comment: '0 = subscriber, 1 = moderator, 2 = publisher. see: https://tokbox.com/developer/guides/basics/#publish' })
  @ApiProperty({ type: Number, description: 'Token issued role. Where 0=subscriber, 1=publisher and  2=moderator', example:1})
  role: number; 

  @Column()
  @ApiProperty({ type: String, description: 'The application key this session belongs to', example:new Date().toISOString()})
  expires: Date;

}
