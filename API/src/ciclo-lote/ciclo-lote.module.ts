import { Module } from '@nestjs/common';
import { CicloLoteService } from './ciclo-lote.service';
import { CicloLoteController } from './ciclo-lote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CicloLote } from './entities/ciclo-lote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CicloLote])],
  exports: [TypeOrmModule],
  controllers: [CicloLoteController],
  providers: [CicloLoteService],
})
export class CicloLoteModule {}
