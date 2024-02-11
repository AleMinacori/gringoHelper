import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCosechaDto } from './dto/create-cosecha.dto';
import { UpdateCosechaDto } from './dto/update-cosecha.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cosecha } from './entities/cosecha.entity';

@Injectable()
export class CosechaService {
  constructor(
    @InjectRepository(Cosecha)
    private cosechasRepository: Repository<Cosecha>,
  ) {}

  create(createCosechaDto: CreateCosechaDto) {
    return 'This action adds a new cosecha';
  }

  async findAll() {
    const cosecha = await this.cosechasRepository.find();
    return cosecha;
  }

  async findOne(id: number) {
    const cosecha = await this.cosechasRepository.findOneBy({ id });
    return cosecha;
  }

  async findOneOrFail(id: number): Promise<Cosecha | null> {
    const cosecha = await this.cosechasRepository.findOneBy({ id });
    if (!cosecha) {
      throw new NotFoundException(`Cosecha con id ${id} no encontrado`);
    }
    return cosecha;
  }

  update(id: number, updateCosechaDto: UpdateCosechaDto) {
    return `This action updates a #${id} cosecha`;
  }

  remove(id: number) {
    return `This action removes a #${id} cosecha`;
  }
}
