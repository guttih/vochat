import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { ChatToken } from './chat-token.entity';


// https://tokbox.com/developer/guides/create-session/node/

@Entity('sessions')
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
  //@OneToMany(() => ChatToken, token => token.session)
  //tokens: ChatToken[];

}
