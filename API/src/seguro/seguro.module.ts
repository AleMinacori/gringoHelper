import { Module } from '@nestjs/common';
import { SeguroService } from './seguro.service';
import { SeguroController } from './seguro.controller';

@Module({
  controllers: [SeguroController],
  providers: [SeguroService],
})
export class SeguroModule {}
