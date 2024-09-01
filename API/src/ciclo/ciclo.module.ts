import { Module } from '@nestjs/common';
import { CicloService } from './ciclo.service';
import { CicloController } from './ciclo.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciclo } from './entities/ciclo.entity';

import { CicloLoteModule } from '../ciclo-lote/ciclo-lote.module';
import { CicloImpuestoModule } from '../ciclo-impuesto/ciclo-impuesto.module';
import { CicloLoteService } from '../ciclo-lote/ciclo-lote.service';
import { CicloImpuestoService } from '../ciclo-impuesto/ciclo-impuesto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ciclo]),
    CicloLoteModule,
    CicloImpuestoModule,
  ],
  exports: [
    TypeOrmModule,
    CicloService,
    CicloLoteService,
    CicloImpuestoService,
  ],
  controllers: [CicloController],
  providers: [CicloService, CicloLoteService, CicloImpuestoService],
})
export class CicloModule {}
