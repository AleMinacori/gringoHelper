import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { Grano } from './grano/entities/grano.entity';
import { Lote } from './lote/entities/lote.entity';
import { Siembra } from './siembra/entities/siembra.entity';

import { SiembraModule } from './siembra/siembra.module';
import { CosechaModule } from './cosecha/cosecha.module';
import { FumigacionModule } from './fumigacion/fumigacion.module';
import { FertilizacionModule } from './fertilizacion/fertilizacion.module';
import { GranoModule } from './grano/grano.module';
import { LoteModule } from './lote/lote.module';
import { ProductoModule } from './producto/producto.module';
import { CicloModule } from './ciclo/ciclo.module';
import { TratamientoModule } from './tratamiento/tratamiento.module';
import { GastoModule } from './gasto/gasto.module';
import { ImpuestoModule } from './impuesto/impuesto.module';
import { SeguroModule } from './seguro/seguro.module';
import { ContratistaModule } from './contratista/contratista.module';
import { TransporteModule } from './transporte/transporte.module';
import { CampoModule } from './campo/campo.module';
import { CicloImpuestoModule } from './ciclo-impuesto/ciclo-impuesto.module';
import { AplicacionModule } from './aplicacion/aplicacion.module';
import { CicloLoteModule } from './ciclo-lote/ciclo-lote.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2468',
      database: 'campo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SiembraModule,
    CosechaModule,
    FumigacionModule,
    FertilizacionModule,
    GranoModule,
    LoteModule,
    ProductoModule,
    CicloModule,
    TratamientoModule,
    GastoModule,
    ImpuestoModule,
    SeguroModule,
    ContratistaModule,
    TransporteModule,
    CampoModule,
    CicloImpuestoModule,
    AplicacionModule,
    CicloLoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
