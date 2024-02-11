import { Module } from '@nestjs/common';
import { FumigacionService } from './fumigacion.service';
import { FumigacionController } from './fumigacion.controller';

@Module({
  controllers: [FumigacionController],
  providers: [FumigacionService],
})
export class FumigacionModule {}
