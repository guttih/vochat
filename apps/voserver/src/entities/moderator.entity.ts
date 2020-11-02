import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Moderators {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  
  @Column({
    nullable: true,
    comment: 'Values with surrounding quotations and separated by comma.'
  })
  sessionIds: string;
  
}
