import { Module } from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { TransporteController } from './transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transporte } from './entities/transporte.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transporte]),
    CicloModule,
    ContratistaModule,
  ],
  exports: [TypeOrmModule, TransporteService, CicloService, ContratistaService],
  controllers: [TransporteController],
  providers: [TransporteService, CicloService, ContratistaService],
})
export class TransporteModule {}
