import { Module } from '@nestjs/common';
import { ContratistaService } from './contratista.service';
import { ContratistaController } from './contratista.controller';

@Module({
  controllers: [ContratistaController],
  providers: [ContratistaService],
})
export class ContratistaModule {}
