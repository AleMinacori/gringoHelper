import { Module } from '@nestjs/common';
import { CicloImpuestoService } from './ciclo-impuesto.service';
import { CicloImpuestoController } from './ciclo-impuesto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CicloImpuesto } from './entities/ciclo-impuesto.entity';
import { ImpuestoModule } from '../impuesto/impuesto.module';

@Module({
  imports: [TypeOrmModule.forFeature([CicloImpuesto]), ImpuestoModule],
  exports: [TypeOrmModule],
  controllers: [CicloImpuestoController],
  providers: [CicloImpuestoService],
})
export class CicloImpuestoModule {}
