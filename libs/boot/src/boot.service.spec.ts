import { Test, TestingModule } from '@nestjs/testing';
import { BootService } from './boot.service';

describe('BootService', () => {
  let service: BootService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BootService],
    }).compile();

    service = module.get<BootService>(BootService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
