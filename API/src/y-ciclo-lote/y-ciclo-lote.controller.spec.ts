import { Test, TestingModule } from '@nestjs/testing';
import { YCicloLoteController } from './y-ciclo-lote.controller';
import { YCicloLoteService } from './y-ciclo-lote.service';

describe('YCicloLoteController', () => {
  let controller: YCicloLoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YCicloLoteController],
      providers: [YCicloLoteService],
    }).compile();

    controller = module.get<YCicloLoteController>(YCicloLoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
