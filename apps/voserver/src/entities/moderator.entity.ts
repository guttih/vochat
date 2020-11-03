import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Moderator {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  
  @Column()
  sessionIds: string;
  
}
