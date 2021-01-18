import { Test, TestingModule } from '@nestjs/testing';
import { CiudadlatLongService } from './ciudadlat-long.service';

describe('CiudadlatLongService', () => {
  let service: CiudadlatLongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CiudadlatLongService],
    }).compile();

    service = module.get<CiudadlatLongService>(CiudadlatLongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
