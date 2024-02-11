import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZCicloContratistaSiembraDto } from './dto/create-z-ciclo-contratista-siembra.dto';
import { UpdateZCicloContratistaSiembraDto } from './dto/update-z-ciclo-contratista-siembra.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ZCicloContratistaSiembra } from './entities/z-ciclo-contratista-siembra.entity';

@Injectable()
export class ZCicloContratistaSiembraService {
  constructor(
    @InjectRepository(ZCicloContratistaSiembra)
    private zCicloContratistaSiembraRepository: Repository<ZCicloContratistaSiembra>,
  ) {}

  create(createZCicloContratistaSiembraDto: CreateZCicloContratistaSiembraDto) {
    return 'This action adds a new zCicloContratistaSiembra';
  }

  findAll() {
    return `This action returns all zCicloContratistaSiembra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zCicloContratistaSiembra`;
  }

  async findOneOrFail(id: number): Promise<ZCicloContratistaSiembra | null> {
    const zCicloContratistaSiembra =
      await this.zCicloContratistaSiembraRepository.findOneBy({ id });
    if (!zCicloContratistaSiembra) {
      throw new NotFoundException(
        `ZCicloContratistaSiembra con id ${id} no encontrada`,
      );
    }
    return zCicloContratistaSiembra;
  }

  update(
    id: number,
    updateZCicloContratistaSiembraDto: UpdateZCicloContratistaSiembraDto,
  ) {
    return `This action updates a #${id} zCicloContratistaSiembra`;
  }

  remove(id: number) {
    return `This action removes a #${id} zCicloContratistaSiembra`;
  }
}
