import { Module } from '@nestjs/common';
import { YCicloLoteService } from './y-ciclo-lote.service';
import { YCicloLoteController } from './y-ciclo-lote.controller';

@Module({
  controllers: [YCicloLoteController],
  providers: [YCicloLoteService]
})
export class YCicloLoteModule {}
