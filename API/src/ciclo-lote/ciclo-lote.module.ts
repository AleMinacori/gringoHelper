import { Module } from '@nestjs/common';
import { CicloLoteService } from './ciclo-lote.service';
import { CicloLoteController } from './ciclo-lote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CicloLote } from './entities/ciclo-lote.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { LoteModule } from '../lote/lote.module';

@Module({
  imports: [TypeOrmModule.forFeature([CicloLote]), LoteModule],
  exports: [TypeOrmModule],
  controllers: [CicloLoteController],
  providers: [CicloLoteService],
})
export class CicloLoteModule {}
