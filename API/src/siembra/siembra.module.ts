import { Module } from '@nestjs/common';
import { SiembraService } from './siembra.service';
import { SiembraController } from './siembra.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Siembra } from './entities/siembra.entity';

import { GranoModule } from '../grano/grano.module';
import { TratamientoModule } from '../tratamiento/tratamiento.module';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';
import { GranoService } from '../grano/grano.service';
import { TratamientoService } from '../tratamiento/tratamiento.service';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Siembra]),
    GranoModule,
    TratamientoModule,
    CicloModule,
    ContratistaModule,
  ],
  exports: [
    TypeOrmModule,
    SiembraService,
    GranoService,
    TratamientoService,
    CicloService,
    ContratistaService,
  ],
  controllers: [SiembraController],
  providers: [
    SiembraService,
    GranoService,
    TratamientoService,
    CicloService,
    ContratistaService,
  ],
})
export class SiembraModule {}
