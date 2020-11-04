
import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { ChatSession } from './chat-session.entity';

//see: comment: 'https://tokbox.com/developer/guides/basics/#token'

@Entity('tokens')
export class ChatToken  {
  @PrimaryColumn()
  token: string;

  //@ManyToOne(()=> ChatSession, session => session.tokens)
  @Column()
  sessionId:string;

  @Column()
  name: string;

  @Column({
    comment: '0 = subscriber, 1 = moderator, 2 = publisher. see: https://tokbox.com/developer/guides/basics/#publish'
  })
  role: number; 

  @Column()
  expires: Date;

}
