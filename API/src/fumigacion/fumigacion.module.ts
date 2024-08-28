import { Module } from '@nestjs/common';
import { FumigacionService } from './fumigacion.service';
import { FumigacionController } from './fumigacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fumigacion } from './entities/fumigacion.entity';
import { AplicacionModule } from '../aplicacion/aplicacion.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fumigacion]), AplicacionModule],
  exports: [TypeOrmModule],
  controllers: [FumigacionController],
  providers: [FumigacionService],
})
export class FumigacionModule {}
