import { Test, TestingModule } from '@nestjs/testing';
import { ApiSdkService } from './api-sdk.service';

describe('ApiSdkService', () => {
  let service: ApiSdkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiSdkService],
    }).compile();

    service = module.get<ApiSdkService>(ApiSdkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
