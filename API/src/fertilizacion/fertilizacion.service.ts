import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFertilizacionDto } from './dto/create-fertilizacion.dto';
import { UpdateFertilizacionDto } from './dto/update-fertilizacion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Fertilizacion } from './entities/fertilizacion.entity';

@Injectable()
export class FertilizacionService {
  constructor(
    @InjectRepository(Fertilizacion)
    private fertilizacionesRepository: Repository<Fertilizacion>,
  ) {}

  create(createFertilizacionDto: CreateFertilizacionDto) {
    return 'This action adds a new fertilizacion';
  }

  async findAll() {
    const fertilizaciones = await this.fertilizacionesRepository.find();
    return fertilizaciones;
  }

  async findOne(id: number) {
    const fertilizacion = await this.fertilizacionesRepository.findOneBy({
      id,
    });
    return fertilizacion;
  }

  async findOneOrFail(id: number): Promise<Fertilizacion | null> {
    const fertilizacion = await this.fertilizacionesRepository.findOneBy({
      id,
    });
    if (!fertilizacion) {
      throw new NotFoundException(`Fertilizacion con id ${id} no encontrado`);
    }
    return fertilizacion;
  }

  update(id: number, updateFertilizacionDto: UpdateFertilizacionDto) {
    return `This action updates a #${id} fertilizacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} fertilizacion`;
  }
}
