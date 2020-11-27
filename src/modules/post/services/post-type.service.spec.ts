import { Test, TestingModule } from '@nestjs/testing';
import { PostTypeService } from './post-type.service';

describe('PostTypeService', () => {
  let service: PostTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostTypeService],
    }).compile();

    service = module.get<PostTypeService>(PostTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
