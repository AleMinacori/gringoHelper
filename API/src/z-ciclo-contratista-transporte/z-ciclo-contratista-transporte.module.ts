import { Module } from '@nestjs/common';
import { ZCicloContratistaTransporteService } from './z-ciclo-contratista-transporte.service';
import { ZCicloContratistaTransporteController } from './z-ciclo-contratista-transporte.controller';

@Module({
  controllers: [ZCicloContratistaTransporteController],
  providers: [ZCicloContratistaTransporteService],
})
export class ZCicloContratistaTransporteModule {}
