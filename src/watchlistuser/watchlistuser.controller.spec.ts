import { Test, TestingModule } from '@nestjs/testing';
import { WatchlistuserController } from './watchlistuser.controller';

describe('WatchlistuserController', () => {
  let controller: WatchlistuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchlistuserController],
    }).compile();

    controller = module.get<WatchlistuserController>(WatchlistuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
