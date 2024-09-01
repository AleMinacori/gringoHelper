import { Module } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { TratamientoController } from './tratamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tratamiento } from './entities/tratamiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tratamiento])],
  exports: [TypeOrmModule, TratamientoService],
  controllers: [TratamientoController],
  providers: [TratamientoService],
})
export class TratamientoModule {}
