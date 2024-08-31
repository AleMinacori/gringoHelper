import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';

@Module({
  imports: [TypeOrmModule.forFeature([Gasto]), CicloModule, ContratistaModule],
  exports: [TypeOrmModule],
  controllers: [GastoController],
  providers: [GastoService],
})
export class GastoModule {}
