import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeguroDto } from './dto/create-seguro.dto';
import { UpdateSeguroDto } from './dto/update-seguro.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Seguro } from './entities/seguro.entity';

@Injectable()
export class SeguroService {
  constructor(
    @InjectRepository(Seguro)
    private segurosRepository: Repository<Seguro>,
  ) {}

  create(createSeguroDto: CreateSeguroDto) {
    return 'This action adds a new seguro';
  }

  async findAll() {
    const seguros = await this.segurosRepository.find();
    return seguros;
  }

  async findOne(id: number) {
    const seguro = await this.segurosRepository.findOneBy({ id });
    return seguro;
  }

  async findOneOrFail(id: number): Promise<Seguro | null> {
    const seguro = await this.segurosRepository.findOneBy({ id });
    if (!seguro) {
      throw new NotFoundException(`Seguro con id ${id} no encontrada`);
    }
    return seguro;
  }

  update(id: number, updateSeguroDto: UpdateSeguroDto) {
    return `This action updates a #${id} seguro`;
  }

  remove(id: number) {
    return `This action removes a #${id} seguro`;
  }
}
