import { Module } from '@nestjs/common';
import { ImpuestoService } from './impuesto.service';
import { ImpuestoController } from './impuesto.controller';

@Module({
  controllers: [ImpuestoController],
  providers: [ImpuestoService],
})
export class ImpuestoModule {}
