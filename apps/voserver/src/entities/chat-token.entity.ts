
import { ChatSession } from './chat-session.entity' 
import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';

//see: comment: 'https://tokbox.com/developer/guides/basics/#token'

@Entity()
export class ChatToken {
  @PrimaryColumn()
  id: string;

  //@ManyToOne(()=> ChatSession, session => session.tokens)
  session: ChatSession;

  @Column({
    comment: '0 = subscriber, 1 = moderator, 2 = publisher. see: https://tokbox.com/developer/guides/basics/#publish'
  })
  role: number; 

  @Column()
  expires: Date;

}
