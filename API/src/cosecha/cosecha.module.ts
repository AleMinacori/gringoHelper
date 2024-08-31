import { Module } from '@nestjs/common';
import { CosechaService } from './cosecha.service';
import { CosechaController } from './cosecha.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cosecha } from './entities/cosecha.entity';
import { CicloModule } from '../ciclo/ciclo.module';
import { ContratistaModule } from '../contratista/contratista.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cosecha]),
    CicloModule,
    ContratistaModule,
  ],
  exports: [TypeOrmModule],
  controllers: [CosechaController],
  providers: [CosechaService],
})
export class CosechaModule {}
