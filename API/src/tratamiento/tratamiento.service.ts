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
    private tratamientosRepository: Repository<Tratamiento>,
  ) {}

  create(createTratamientoDto: CreateTratamientoDto) {
    return 'This action adds a new tratamiento';
  }

  async findAll() {
    const tratamientos = await this.tratamientosRepository.find();
    return tratamientos;
  }

  async findOne(id: number) {
    const tratamiento = await this.tratamientosRepository.findOneBy({ id });
    return tratamiento;
  }

  async findOneOrFail(id: number): Promise<Tratamiento | null> {
    const tratamiento = await this.tratamientosRepository.findOneBy({ id });
    if (!tratamiento) {
      throw new NotFoundException(`Tratamiento con id ${id} no encontrado`);
    }
    return tratamiento;
  }

  update(id: number, updateTratamientoDto: UpdateTratamientoDto) {
    return `This action updates a #${id} tratamiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tratamiento`;
  }
}
