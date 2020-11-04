
import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ChatSession } from './chat-session.entity';

//see: comment: 'https://tokbox.com/developer/guides/basics/#token'

@Entity()
export class ChatToken  {
  @PrimaryColumn()
  token: string;

  @ManyToOne(()=> ChatSession, session => session.tokens)
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
