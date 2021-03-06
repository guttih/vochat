import { DiskFunctionsModule } from '@advania/disk-functions';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, DiskFunctionsModule],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to voserver!  See /swagger for available routes. and /graphql for the GraphQL playground."', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to voserver!  See /swagger for available routes. and /graphql for the GraphQL playground.',
      });
    });
  });
});
