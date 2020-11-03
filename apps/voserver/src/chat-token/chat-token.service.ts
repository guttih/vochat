import { Injectable } from '@nestjs/common';
import { ChatSession } from '../entities/chat-session.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChatSessionDto } from '../models/chat-session.models';


@Injectable()
export class ChatSessionService {
  
  

  constructor(
    @InjectRepository(ChatSession) private readonly repo: Repository<ChatSession>
  ) {}

  async getItem(mId: string):Promise<ChatSession> {
    return await this.repo.findOneOrFail(mId);
  }

  public async findAll(): Promise<ChatSession[]> {
    return await this.repo.find()
  }

  public async create(chatSession: CreateChatSessionDto): Promise<ChatSession> {
      console.log('service',chatSession)
    return await this.repo.save(chatSession);
  }

  public async update(id: string, newValue: CreateChatSessionDto): Promise<ChatSession | null> {
    const item = await this.repo.findOneOrFail(id);
    if (!item.id) {
      // tslint:disable-next-line:no-console
      console.error("Todo doesn't exist");
    }
    await this.repo.update(id, newValue);
    return await this.repo.findOne(id);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
