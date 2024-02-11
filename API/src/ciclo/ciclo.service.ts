import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ciclo } from './entities/ciclo.entity';

@Injectable()
export class CicloService {
  constructor(
    @InjectRepository(Ciclo)
    private ciclosRepository: Repository<Ciclo>,
  ) {}

  async create(createCicloDto: CreateCicloDto) {
    const ciclo = new Ciclo(createCicloDto.name);
    return await this.ciclosRepository.save(ciclo);
  }

  async findAll() {
    const ciclos = await this.ciclosRepository.find();
    return ciclos;
  }

  async findOne(id: number) {
    const ciclo = await this.ciclosRepository.findOneBy({ id });
    return ciclo;
  }

  async findOneOrFail(id: number): Promise<Ciclo | null> {
    const ciclo = await this.ciclosRepository.findOneBy({ id });
    if (!ciclo) {
      throw new NotFoundException(`Ciclo con id ${id} no encontrado`);
    }
    return ciclo;
  }

  async findOneComplete(id: number) {
    const ciclo = await this.ciclosRepository.findOneBy({ id });
    return ciclo;
  }

  async update(id: number, updateCicloDto: UpdateCicloDto) {
    const ciclo = await this.findOneOrFail(id);
    ciclo.setName(updateCicloDto.name);
    return await this.ciclosRepository.save(ciclo);
  }

  async remove(id: number) {
    return await this.ciclosRepository.delete(id);
  }
}
