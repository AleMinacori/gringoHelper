import { Module } from '@nestjs/common';
import { CicloLoteService } from './ciclo-lote.service';
import { CicloLoteController } from './ciclo-lote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CicloLote } from './entities/ciclo-lote.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { LoteModule } from '../lote/lote.module';
import { LoteService } from '../lote/lote.service';

@Module({
  imports: [TypeOrmModule.forFeature([CicloLote]), LoteModule],
  exports: [TypeOrmModule, CicloLoteService, LoteService],
  controllers: [CicloLoteController],
  providers: [CicloLoteService, LoteService],
})
export class CicloLoteModule {}
