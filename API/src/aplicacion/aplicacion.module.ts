import { Module } from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { AplicacionController } from './aplicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aplicacion } from './entities/aplicacion.entity';
import { ProductoModule } from '../producto/producto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Aplicacion]), ProductoModule],
  exports: [TypeOrmModule],
  controllers: [AplicacionController],
  providers: [AplicacionService],
})
export class AplicacionModule {}
