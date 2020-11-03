import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moderator } from '../entities/moderator.entity';
import { ModeratorController } from './moderator.controller';
import { ModeratorService } from './moderator.service';

@Module({
  imports:[TypeOrmModule.forFeature([Moderator])],
  controllers: [ModeratorController],
  providers: [ModeratorService]
})
export class ModeratorModule {}
