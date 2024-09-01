import { Module } from '@nestjs/common';
import { LoteService } from './lote.service';
import { LoteController } from './lote.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Lote } from './entities/lote.entity';
import { CampoModule } from '../campo/campo.module';
import { CampoService } from '../campo/campo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lote]), CampoModule],
  exports: [TypeOrmModule, LoteService, CampoService],
  controllers: [LoteController],
  providers: [LoteService, CampoService],
})
export class LoteModule {}
