import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gasto]), CicloModule, ContratistaModule],
  exports: [TypeOrmModule, GastoService, CicloService, ContratistaService],
  controllers: [GastoController],
  providers: [GastoService, CicloService, ContratistaService],
})
export class GastoModule {}
