import { Module } from '@nestjs/common';
import { CicloImpuestoService } from './ciclo-impuesto.service';
import { CicloImpuestoController } from './ciclo-impuesto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CicloImpuesto } from './entities/ciclo-impuesto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CicloImpuesto])],
  exports: [TypeOrmModule],
  controllers: [CicloImpuestoController],
  providers: [CicloImpuestoService],
})
export class CicloImpuestoModule {}
