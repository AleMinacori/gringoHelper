import { Module } from '@nestjs/common';
import { ZCicloContratistaCosechaService } from './z-ciclo-contratista-cosecha.service';
import { ZCicloContratistaCosechaController } from './z-ciclo-contratista-cosecha.controller';

@Module({
  controllers: [ZCicloContratistaCosechaController],
  providers: [ZCicloContratistaCosechaService],
})
export class ZCicloContratistaCosechaModule {}
