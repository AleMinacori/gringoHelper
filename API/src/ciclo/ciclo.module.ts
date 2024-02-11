import { Module } from '@nestjs/common';
import { CicloService } from './ciclo.service';
import { CicloController } from './ciclo.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciclo } from './entities/ciclo.entity';

import { LoteModule } from '../lote/lote.module';
import { SiembraModule } from '../siembra/siembra.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ciclo]), SiembraModule, LoteModule],
  exports: [TypeOrmModule],
  controllers: [CicloController],
  providers: [CicloService],
})
export class CicloModule {}
