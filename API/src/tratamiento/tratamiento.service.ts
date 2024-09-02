import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTratamientoDto } from './dto/create-tratamiento.dto';
import { UpdateTratamientoDto } from './dto/update-tratamiento.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tratamiento } from './entities/tratamiento.entity';

@Injectable()
export class TratamientoService {
  constructor(
    @InjectRepository(Tratamiento)
    private tratamientoRepository: Repository<Tratamiento>,
  ) {}

  async create(createTratamientoDto: CreateTratamientoDto) {
    const tratamiento = new Tratamiento(
      createTratamientoDto.name,
      createTratamientoDto.description,
    );
    return await this.tratamientoRepository.save(tratamiento);
  }

  async findAll() {
    return await this.tratamientoRepository.find();
  }

  async findOne(id: number) {
    return await this.tratamientoRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Tratamiento | null> {
    const tratamiento = await this.tratamientoRepository.findOneBy({ id });
    if (!tratamiento) {
      throw new NotFoundException(`Tratamiento con id ${id} no encontrado`);
    }
    return tratamiento;
  }

  async update(id: number, updateTratamientoDto: UpdateTratamientoDto) {
    const tratamiento = await this.findOneOrFail(id);
    if (updateTratamientoDto.name) {
      tratamiento.setName(updateTratamientoDto.name);
    }
    if (updateTratamientoDto.description) {
      tratamiento.setDescription(updateTratamientoDto.description);
    }
    return await this.tratamientoRepository.save(tratamiento);
  }

  async remove(id: number) {
    return await this.tratamientoRepository.softDelete({ id });
  }
}
