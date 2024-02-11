import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZCicloContratistaGastoDto } from './dto/create-z-ciclo-contratista-gasto.dto';
import { UpdateZCicloContratistaGastoDto } from './dto/update-z-ciclo-contratista-gasto.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ZCicloContratistaGasto } from './entities/z-ciclo-contratista-gasto.entity';

@Injectable()
export class ZCicloContratistaGastoService {
  constructor(
    @InjectRepository(ZCicloContratistaGasto)
    private zCicloContratistaGastoRepository: Repository<ZCicloContratistaGasto>,
  ) {}

  create(createZCicloContratistaGastoDto: CreateZCicloContratistaGastoDto) {
    return 'This action adds a new zCicloContratistaGasto';
  }

  findAll() {
    return `This action returns all zCicloContratistaGasto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zCicloContratistaGasto`;
  }

  async findOneOrFail(id: number): Promise<ZCicloContratistaGasto | null> {
    const zCicloContratistaGasto =
      await this.zCicloContratistaGastoRepository.findOneBy({ id });
    if (!zCicloContratistaGasto) {
      throw new NotFoundException(
        `ZCicloContratistaGasto con id ${id} no encontrada`,
      );
    }
    return zCicloContratistaGasto;
  }

  update(
    id: number,
    updateZCicloContratistaGastoDto: UpdateZCicloContratistaGastoDto,
  ) {
    return `This action updates a #${id} zCicloContratistaGasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} zCicloContratistaGasto`;
  }
}
