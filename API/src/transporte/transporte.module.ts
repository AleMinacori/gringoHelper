import { Module } from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { TransporteController } from './transporte.controller';

@Module({
  controllers: [TransporteController],
  providers: [TransporteService],
})
export class TransporteModule {}
