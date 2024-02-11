import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZCicloContratistaFertilizacionDto } from './dto/create-z-ciclo-contratista-fertilizacion.dto';
import { UpdateZCicloContratistaFertilizacionDto } from './dto/update-z-ciclo-contratista-fertilizacion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ZCicloContratistaFertilizacion } from './entities/z-ciclo-contratista-fertilizacion.entity';

@Injectable()
export class ZCicloContratistaFertilizacionService {
  constructor(
    @InjectRepository(ZCicloContratistaFertilizacion)
    private zCicloContratistaFertilizacionRepository: Repository<ZCicloContratistaFertilizacion>,
  ) {}

  create(
    createZCicloContratistaFertilizacionDto: CreateZCicloContratistaFertilizacionDto,
  ) {
    return 'This action adds a new zCicloContratistaFertilizacion';
  }

  findAll() {
    return `This action returns all zCicloContratistaFertilizacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zCicloContratistaFertilizacion`;
  }

  async findOneOrFail(
    id: number,
  ): Promise<ZCicloContratistaFertilizacion | null> {
    const zCicloContratistaFertilizacion =
      await this.zCicloContratistaFertilizacionRepository.findOneBy({ id });
    if (!zCicloContratistaFertilizacion) {
      throw new NotFoundException(
        `ZCicloContratistaFertilizacion con id ${id} no encontrada`,
      );
    }
    return zCicloContratistaFertilizacion;
  }

  update(
    id: number,
    updateZCicloContratistaFertilizacionDto: UpdateZCicloContratistaFertilizacionDto,
  ) {
    return `This action updates a #${id} zCicloContratistaFertilizacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} zCicloContratistaFertilizacion`;
  }
}
