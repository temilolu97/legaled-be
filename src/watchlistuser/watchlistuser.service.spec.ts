import { Test, TestingModule } from '@nestjs/testing';
import { WatchlistuserService } from './watchlistuser.service';

describe('WatchlistuserService', () => {
  let service: WatchlistuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchlistuserService],
    }).compile();

    service = module.get<WatchlistuserService>(WatchlistuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
