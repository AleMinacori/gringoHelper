import { Module } from '@nestjs/common';
import { SiembraService } from './siembra.service';
import { SiembraController } from './siembra.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Siembra } from './entities/siembra.entity';

import { GranoModule } from '../grano/grano.module';
import { LoteModule } from '../lote/lote.module';

@Module({
  imports: [TypeOrmModule.forFeature([Siembra]), GranoModule, LoteModule],
  exports: [TypeOrmModule],
  controllers: [SiembraController],
  providers: [SiembraService],
})
export class SiembraModule {}
