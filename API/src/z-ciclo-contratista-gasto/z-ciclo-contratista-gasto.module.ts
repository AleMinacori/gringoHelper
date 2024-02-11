import { Module } from '@nestjs/common';
import { ZCicloContratistaGastoService } from './z-ciclo-contratista-gasto.service';
import { ZCicloContratistaGastoController } from './z-ciclo-contratista-gasto.controller';

@Module({
  controllers: [ZCicloContratistaGastoController],
  providers: [ZCicloContratistaGastoService],
})
export class ZCicloContratistaGastoModule {}
