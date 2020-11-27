import { Test, TestingModule } from '@nestjs/testing';
import { PostTypeResolver } from './post-type.resolver';

describe('PostTypeResolver', () => {
  let resolver: PostTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostTypeResolver],
    }).compile();

    resolver = module.get<PostTypeResolver>(PostTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
