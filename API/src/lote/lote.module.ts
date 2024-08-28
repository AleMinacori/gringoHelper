import { Module } from '@nestjs/common';
import { LoteService } from './lote.service';
import { LoteController } from './lote.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Lote } from './entities/lote.entity';
import { CampoModule } from '../campo/campo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lote]), CampoModule],
  exports: [TypeOrmModule, LoteService],
  controllers: [LoteController],
  providers: [LoteService],
})
export class LoteModule {}
