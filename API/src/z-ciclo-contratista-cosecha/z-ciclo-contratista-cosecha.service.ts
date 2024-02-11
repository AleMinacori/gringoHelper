import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZCicloContratistaCosechaDto } from './dto/create-z-ciclo-contratista-cosecha.dto';
import { UpdateZCicloContratistaCosechaDto } from './dto/update-z-ciclo-contratista-cosecha.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ZCicloContratistaCosecha } from './entities/z-ciclo-contratista-cosecha.entity';

@Injectable()
export class ZCicloContratistaCosechaService {
  constructor(
    @InjectRepository(ZCicloContratistaCosecha)
    private zCicloContratistaCosechaRepository: Repository<ZCicloContratistaCosecha>,
  ) {}

  create(createZCicloContratistaCosechaDto: CreateZCicloContratistaCosechaDto) {
    return 'This action adds a new zCicloContratistaCosecha';
  }

  findAll() {
    return `This action returns all zCicloContratistaCosecha`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zCicloContratistaCosecha`;
  }

  async findOneOrFail(id: number): Promise<ZCicloContratistaCosecha | null> {
    const zCicloContratistaCosecha =
      await this.zCicloContratistaCosechaRepository.findOneBy({ id });
    if (!zCicloContratistaCosecha) {
      throw new NotFoundException(
        `ZCicloContratistaCosecha con id ${id} no encontrada`,
      );
    }
    return zCicloContratistaCosecha;
  }

  update(
    id: number,
    updateZCicloContratistaCosechaDto: UpdateZCicloContratistaCosechaDto,
  ) {
    return `This action updates a #${id} zCicloContratistaCosecha`;
  }

  remove(id: number) {
    return `This action removes a #${id} zCicloContratistaCosecha`;
  }
}
