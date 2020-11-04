import { Injectable } from '@nestjs/common';
import { ChatSession } from '../entities/chat-session.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChatSessionDto } from '../models/chat-session.models';
import { ChatToken } from '../entities/chat-token.entity';


@Injectable()
export class ChatSessionService {
  
  

  constructor(
    @InjectRepository(ChatSession) private readonly repo: Repository<ChatSession>
  ) {
    console.log("ChatSessionService constructor running");
  }

  public async getItem(mId: string):Promise<ChatSession> {
    const item = await this.repo.findOneOrFail(mId);
    console.log(item)
    return item;
  }

  public async findAll(): Promise<ChatSession[]> {
    return await this.repo.find()
  }

  public async create(chatSessionDto: CreateChatSessionDto): Promise<ChatSession> {
      const entity = chatSessionDto.ToEntity();
      console.log('db creating ChatSession',entity)
    return await this.repo.save(entity);
  }

  public async update(id: string, newValue: CreateChatSessionDto): Promise<ChatSession | null> {
    const item = await this.repo.findOneOrFail(id);
    if (!item.id) {
      // tslint:disable-next-line:no-console
      console.error("Todo doesn't exist");
    }
    await this.repo.update(id, CreateChatSessionDto.ValuesToEntity(newValue));
    return await this.repo.findOne(id);
  }

  public async delete(id: string): Promise<DeleteResult> {
    await this.repo
    .createQueryBuilder()
    .delete()
    .from(ChatToken)
    .where("sessionId = :id", { id: id })
    .execute();
    
    return await this.repo.delete(id);
  }
}
