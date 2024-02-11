import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Gasto } from './entities/gasto.entity';

@Injectable()
export class GastoService {
  constructor(
    @InjectRepository(Gasto)
    private gastosRepository: Repository<Gasto>,
  ) {}

  create(createGastoDto: CreateGastoDto) {
    return 'This action adds a new gasto';
  }

  async findAll() {
    const gastos = await this.gastosRepository.find();
    return gastos;
  }

  async findOne(id: number) {
    const gasto = await this.gastosRepository.findOneBy({ id });
    return gasto;
  }

  async findOneOrFail(id: number): Promise<Gasto | null> {
    const gasto = await this.gastosRepository.findOneBy({ id });
    if (!gasto) {
      throw new NotFoundException(`Gasto con id ${id} no encontrado`);
    }
    return gasto;
  }

  update(id: number, updateGastoDto: UpdateGastoDto) {
    return `This action updates a #${id} gasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
