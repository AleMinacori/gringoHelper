import { Module } from '@nestjs/common';
import { CicloImpuestoService } from './ciclo-impuesto.service';
import { CicloImpuestoController } from './ciclo-impuesto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CicloImpuesto } from './entities/ciclo-impuesto.entity';
import { ImpuestoModule } from '../impuesto/impuesto.module';
import { ImpuestoService } from '../impuesto/impuesto.service';

@Module({
  imports: [TypeOrmModule.forFeature([CicloImpuesto]), ImpuestoModule],
  exports: [TypeOrmModule, CicloImpuestoService, ImpuestoService],
  controllers: [CicloImpuestoController],
  providers: [CicloImpuestoService, ImpuestoService],
})
export class CicloImpuestoModule {}
