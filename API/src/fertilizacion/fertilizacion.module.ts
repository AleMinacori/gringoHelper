import { Module } from '@nestjs/common';
import { FertilizacionService } from './fertilizacion.service';
import { FertilizacionController } from './fertilizacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fertilizacion } from './entities/fertilizacion.entity';
import { AplicacionModule } from '../aplicacion/aplicacion.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fertilizacion]), AplicacionModule],
  exports: [TypeOrmModule],
  controllers: [FertilizacionController],
  providers: [FertilizacionService],
})
export class FertilizacionModule {}
