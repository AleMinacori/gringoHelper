import { Module } from '@nestjs/common';
import { FertilizacionService } from './fertilizacion.service';
import { FertilizacionController } from './fertilizacion.controller';

@Module({
  controllers: [FertilizacionController],
  providers: [FertilizacionService],
})
export class FertilizacionModule {}
