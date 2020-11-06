import { DiskFunctionsModule } from '@advania/disk-functions';
import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, DiskFunctionsModule],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to voserver!  See /swagger for available routes. and /graphql for the GraphQL playground."', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to voserver!  See /swagger for available routes. and /graphql for the GraphQL playground.' });
    });
  });
});
