import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFumigacionDto } from './dto/create-fumigacion.dto';
import { UpdateFumigacionDto } from './dto/update-fumigacion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Fumigacion } from './entities/fumigacion.entity';

@Injectable()
export class FumigacionService {
  constructor(
    @InjectRepository(Fumigacion)
    private fumigacionesRepository: Repository<Fumigacion>,
  ) {}

  create(createFumigacionDto: CreateFumigacionDto) {
    return 'This action adds a new fumigacion';
  }

  async findAll() {
    const fumigaciones = await this.fumigacionesRepository.find();
    return fumigaciones;
  }

  async findOne(id: number) {
    const fumigacion = await this.fumigacionesRepository.findOneBy({ id });
    return fumigacion;
  }

  async findOneOrFail(id: number): Promise<Fumigacion | null> {
    const fumigacion = await this.fumigacionesRepository.findOneBy({ id });
    if (!fumigacion) {
      throw new NotFoundException(`Fumigacion con id ${id} no encontrado`);
    }
    return fumigacion;
  }

  update(id: number, updateFumigacionDto: UpdateFumigacionDto) {
    return `This action updates a #${id} fumigacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} fumigacion`;
  }
}
