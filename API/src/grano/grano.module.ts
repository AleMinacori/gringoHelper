import { Module } from '@nestjs/common';
import { GranoService } from './grano.service';
import { GranoController } from './grano.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Grano } from './entities/grano.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grano])],
  exports: [TypeOrmModule, GranoService],
  controllers: [GranoController],
  providers: [GranoService],
})
export class GranoModule {}
