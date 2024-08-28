import { Module } from '@nestjs/common';
import { CosechaService } from './cosecha.service';
import { CosechaController } from './cosecha.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cosecha } from './entities/cosecha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cosecha])],
  exports: [TypeOrmModule],
  controllers: [CosechaController],
  providers: [CosechaService],
})
export class CosechaModule {}
