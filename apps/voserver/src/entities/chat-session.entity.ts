import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { ChatToken } from './chat-token.entity';


// https://tokbox.com/developer/guides/create-session/node/

@Entity()
export class ChatSession {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
  
  /*@Column()
  moderatorName: string;*/
  
  @Column()
  apiKey: string;
  
  //Sessions never expire but tokens to
  @OneToMany(() => ChatToken, token => token.sessionId)
  tokens: ChatToken[];

}
