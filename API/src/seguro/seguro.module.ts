import { Module } from '@nestjs/common';
import { SeguroService } from './seguro.service';
import { SeguroController } from './seguro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguro } from './entities/seguro.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { CicloService } from '../ciclo/ciclo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seguro]), CicloModule],
  exports: [TypeOrmModule, SeguroService, CicloService],
  controllers: [SeguroController],
  providers: [SeguroService, CicloService],
})
export class SeguroModule {}
