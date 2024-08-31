import { Module } from '@nestjs/common';
import { CicloService } from './ciclo.service';
import { CicloController } from './ciclo.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciclo } from './entities/ciclo.entity';

import { CicloLoteModule } from '../ciclo-lote/ciclo-lote.module';
import { SiembraModule } from '../siembra/siembra.module';
import { CicloImpuestoModule } from '../ciclo-impuesto/ciclo-impuesto.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ciclo]),
    SiembraModule,
    CicloLoteModule,
    CicloImpuestoModule,
  ],
  exports: [TypeOrmModule],
  controllers: [CicloController],
  providers: [CicloService],
})
export class CicloModule {}
