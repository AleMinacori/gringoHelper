import { Module } from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { TransporteController } from './transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transporte } from './entities/transporte.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transporte]),
    CicloModule,
    ContratistaModule,
  ],
  exports: [TypeOrmModule],
  controllers: [TransporteController],
  providers: [TransporteService],
})
export class TransporteModule {}
