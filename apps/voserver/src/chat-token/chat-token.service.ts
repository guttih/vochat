import { Injectable } from '@nestjs/common';
import { ChatToken } from '../entities/chat-token.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChatTokenDto } from '../models/chat-token.models';


@Injectable()
export class ChatTokenService {
  
  

  constructor(
    @InjectRepository(ChatToken) private readonly repo: Repository<ChatToken>
  ) {}

  async getItem(mId: string):Promise<ChatToken> {
    return await this.repo.findOneOrFail(mId);
  }

  public async findAll(): Promise<ChatToken[]> {
    return await this.repo.find()
  }

  public async create(chatToken: ChatToken): Promise<ChatToken> {
      console.log('service',chatToken)

      
    return await this.repo.save(chatToken);
  }

  public async update(token: string, newValue: ChatToken): Promise<ChatToken | null> {
    const item = await this.repo.findOneOrFail(token);
    if (!item.token) {
      // tslint:disable-next-line:no-console
      console.error("Todo doesn't exist");
    }
    
    await this.repo.update(token, newValue);
    return await this.repo.findOne(token);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
