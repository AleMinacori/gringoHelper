import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZCicloContratistaFumigacionDto } from './dto/create-z-ciclo-contratista-fumigacion.dto';
import { UpdateZCicloContratistaFumigacionDto } from './dto/update-z-ciclo-contratista-fumigacion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ZCicloContratistaFumigacion } from './entities/z-ciclo-contratista-fumigacion.entity';

@Injectable()
export class ZCicloContratistaFumigacionService {
  constructor(
    @InjectRepository(ZCicloContratistaFumigacion)
    private zCicloContratistaFumigacionRepository: Repository<ZCicloContratistaFumigacion>,
  ) {}

  create(
    createZCicloContratistaFumigacionDto: CreateZCicloContratistaFumigacionDto,
  ) {
    return 'This action adds a new zCicloContratistaFumigacion';
  }

  findAll() {
    return `This action returns all zCicloContratistaFumigacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zCicloContratistaFumigacion`;
  }

  async findOneOrFail(id: number): Promise<ZCicloContratistaFumigacion | null> {
    const zCicloContratistaFumigacion =
      await this.zCicloContratistaFumigacionRepository.findOneBy({ id });
    if (!zCicloContratistaFumigacion) {
      throw new NotFoundException(
        `ZCicloContratistaFumigacion con id ${id} no encontrada`,
      );
    }
    return zCicloContratistaFumigacion;
  }

  update(
    id: number,
    updateZCicloContratistaFumigacionDto: UpdateZCicloContratistaFumigacionDto,
  ) {
    return `This action updates a #${id} zCicloContratistaFumigacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} zCicloContratistaFumigacion`;
  }
}
