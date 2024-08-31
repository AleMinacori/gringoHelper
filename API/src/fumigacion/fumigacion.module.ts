import { Module } from '@nestjs/common';
import { FumigacionService } from './fumigacion.service';
import { FumigacionController } from './fumigacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fumigacion } from './entities/fumigacion.entity';
import { AplicacionModule } from '../aplicacion/aplicacion.module';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fumigacion]),
    CicloModule,
    ContratistaModule,
    AplicacionModule,
  ],
  exports: [TypeOrmModule],
  controllers: [FumigacionController],
  providers: [FumigacionService],
})
export class FumigacionModule {}
