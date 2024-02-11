import { Module } from '@nestjs/common';
import { ZCicloContratistaSiembraService } from './z-ciclo-contratista-siembra.service';
import { ZCicloContratistaSiembraController } from './z-ciclo-contratista-siembra.controller';

@Module({
  controllers: [ZCicloContratistaSiembraController],
  providers: [ZCicloContratistaSiembraService],
})
export class ZCicloContratistaSiembraModule {}
