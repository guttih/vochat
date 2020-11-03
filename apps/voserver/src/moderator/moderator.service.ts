import { Injectable } from '@nestjs/common';
import { Moderator } from '../entities/moderator.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateModeratorDto } from '../models/moderator.models';

@Injectable()
export class ModeratorService {

  constructor(
    @InjectRepository(Moderator) private readonly repo: Repository<Moderator>
  ) {}


  async getItem(mId: string):Promise<Moderator> {
    return await this.repo.findOneOrFail(mId);
  }

  public async findAll(): Promise<Moderator[]> {
    return await this.repo.find()
  }

  public async create(moderator: CreateModeratorDto): Promise<Moderator> {
      console.log('service',moderator)
    return await this.repo.save(moderator);
  }

  public async update(id: string, newValue: CreateModeratorDto): Promise<Moderator | null> {
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
