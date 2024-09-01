import { Module } from '@nestjs/common';
import { CosechaService } from './cosecha.service';
import { CosechaController } from './cosecha.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cosecha } from './entities/cosecha.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cosecha]),
    CicloModule,
    ContratistaModule,
  ],
  exports: [TypeOrmModule, CosechaService, CicloService, ContratistaService],
  controllers: [CosechaController],
  providers: [CosechaService, CicloService, ContratistaService],
})
export class CosechaModule {}
