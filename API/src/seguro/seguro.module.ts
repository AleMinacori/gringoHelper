import { Module } from '@nestjs/common';
import { SeguroService } from './seguro.service';
import { SeguroController } from './seguro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguro } from './entities/seguro.entity';
import { CicloModule } from '../ciclo/ciclo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Seguro]), CicloModule],
  exports: [TypeOrmModule],
  controllers: [SeguroController],
  providers: [SeguroService],
})
export class SeguroModule {}
