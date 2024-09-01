import { Module } from '@nestjs/common';
import { FumigacionService } from './fumigacion.service';
import { FumigacionController } from './fumigacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fumigacion } from './entities/fumigacion.entity';
import { AplicacionModule } from '../aplicacion/aplicacion.module';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';
import { AplicacionService } from '../aplicacion/aplicacion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fumigacion]),
    CicloModule,
    ContratistaModule,
    AplicacionModule,
  ],
  exports: [
    TypeOrmModule,
    FumigacionService,
    CicloService,
    ContratistaService,
    AplicacionService,
  ],
  controllers: [FumigacionController],
  providers: [
    FumigacionService,
    CicloService,
    ContratistaService,
    AplicacionService,
  ],
})
export class FumigacionModule {}
