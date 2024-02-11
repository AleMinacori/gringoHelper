import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransporteDto } from './dto/create-transporte.dto';
import { UpdateTransporteDto } from './dto/update-transporte.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transporte } from './entities/transporte.entity';

@Injectable()
export class TransporteService {
  constructor(
    @InjectRepository(Transporte)
    private transportesRepository: Repository<Transporte>,
  ) {}

  create(createTransporteDto: CreateTransporteDto) {
    return 'This action adds a new transporte';
  }

  async findAll() {
    const transportes = await this.transportesRepository.find();
    return transportes;
  }

  async findOne(id: number) {
    const transporte = await this.transportesRepository.findOneBy({ id });
    return transporte;
  }

  async findOneOrFail(id: number): Promise<Transporte | null> {
    const transporte = await this.transportesRepository.findOneBy({ id });
    if (!transporte) {
      throw new NotFoundException(`Transporte con id ${id} no encontrada`);
    }
    return transporte;
  }

  update(id: number, updateTransporteDto: UpdateTransporteDto) {
    return `This action updates a #${id} transporte`;
  }

  remove(id: number) {
    return `This action removes a #${id} transporte`;
  }
}
