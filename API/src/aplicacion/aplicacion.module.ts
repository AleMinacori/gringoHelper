import { Module } from '@nestjs/common';
import { AplicacionService } from './aplicacion.service';
import { AplicacionController } from './aplicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aplicacion } from './entities/aplicacion.entity';
import { ProductoModule } from '../producto/producto.module';
import { ProductoService } from '../producto/producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aplicacion]), ProductoModule],
  exports: [TypeOrmModule, AplicacionService, ProductoService],
  controllers: [AplicacionController],
  providers: [AplicacionService, ProductoService],
})
export class AplicacionModule {}
