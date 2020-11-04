import { Injectable } from '@nestjs/common';
import { ChatToken } from '../entities/chat-token.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ChatTokenService {
  
  

  constructor(
    @InjectRepository(ChatToken) private readonly repo: Repository<ChatToken>
  ) {
    console.log("ChatTokenService constructor running");
  }

  async getItem(id: number):Promise<ChatToken> {
    const item = await this.repo.findOneOrFail(id);
    console.log(item);
    return item;
  }

  public async findAll(): Promise<ChatToken[]> {
    return await this.repo.find()
  }

  public async create(chatToken: ChatToken): Promise<ChatToken> {
      console.log('service',chatToken)

      
    return await this.repo.save(chatToken);
  }

  public async update(id: number, newValue: ChatToken): Promise<ChatToken | null> {
    const item = await this.repo.findOneOrFail(id);
    if (!item) {
      // tslint:disable-next-line:no-console
      console.error(`Token with id ${id} doesn't exist`);
    }
    
    await this.repo.update(id, newValue);
    return await this.repo.findOne(id);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }
}
