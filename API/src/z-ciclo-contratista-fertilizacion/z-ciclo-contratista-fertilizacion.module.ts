import { Module } from '@nestjs/common';
import { ZCicloContratistaFertilizacionService } from './z-ciclo-contratista-fertilizacion.service';
import { ZCicloContratistaFertilizacionController } from './z-ciclo-contratista-fertilizacion.controller';

@Module({
  controllers: [ZCicloContratistaFertilizacionController],
  providers: [ZCicloContratistaFertilizacionService],
})
export class ZCicloContratistaFertilizacionModule {}
