import { Test, TestingModule } from '@nestjs/testing';
import { YCicloLoteService } from './y-ciclo-lote.service';

describe('YCicloLoteService', () => {
  let service: YCicloLoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YCicloLoteService],
    }).compile();

    service = module.get<YCicloLoteService>(YCicloLoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
