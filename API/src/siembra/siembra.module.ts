import { Module } from '@nestjs/common';
import { SiembraService } from './siembra.service';
import { SiembraController } from './siembra.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Siembra } from './entities/siembra.entity';

import { GranoModule } from '../grano/grano.module';
import { TratamientoModule } from '../tratamiento/tratamiento.module';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Siembra]),
    GranoModule,
    TratamientoModule,
    CicloModule,
    ContratistaModule,
  ],
  exports: [TypeOrmModule],
  controllers: [SiembraController],
  providers: [SiembraService],
})
export class SiembraModule {}
