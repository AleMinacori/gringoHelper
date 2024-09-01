import { Module } from '@nestjs/common';
import { FertilizacionService } from './fertilizacion.service';
import { FertilizacionController } from './fertilizacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fertilizacion } from './entities/fertilizacion.entity';
import { AplicacionModule } from '../aplicacion/aplicacion.module';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';
import { AplicacionService } from '../aplicacion/aplicacion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fertilizacion]),
    CicloModule,
    ContratistaModule,
    AplicacionModule,
  ],
  exports: [
    TypeOrmModule,
    FertilizacionService,
    CicloService,
    ContratistaService,
    AplicacionService,
  ],
  controllers: [FertilizacionController],
  providers: [
    FertilizacionService,
    CicloService,
    ContratistaService,
    AplicacionService,
  ],
})
export class FertilizacionModule {}
