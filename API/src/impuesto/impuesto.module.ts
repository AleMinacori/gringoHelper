import { Module } from '@nestjs/common';
import { ImpuestoService } from './impuesto.service';
import { ImpuestoController } from './impuesto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Impuesto } from './entities/impuesto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Impuesto])],
  exports: [TypeOrmModule, ImpuestoService],
  controllers: [ImpuestoController],
  providers: [ImpuestoService],
})
export class ImpuestoModule {}
