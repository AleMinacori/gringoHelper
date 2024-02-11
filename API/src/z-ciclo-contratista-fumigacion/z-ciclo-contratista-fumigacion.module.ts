import { Module } from '@nestjs/common';
import { ZCicloContratistaFumigacionService } from './z-ciclo-contratista-fumigacion.service';
import { ZCicloContratistaFumigacionController } from './z-ciclo-contratista-fumigacion.controller';

@Module({
  controllers: [ZCicloContratistaFumigacionController],
  providers: [ZCicloContratistaFumigacionService],
})
export class ZCicloContratistaFumigacionModule {}
