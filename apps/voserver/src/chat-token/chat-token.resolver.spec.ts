import { Test, TestingModule } from '@nestjs/testing';
import { ChatTokenResolver } from './chat-token.resolver';

describe('ChatTokenResolver', () => {
  let resolver: ChatTokenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatTokenResolver],
    }).compile();

    resolver = module.get<ChatTokenResolver>(ChatTokenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
