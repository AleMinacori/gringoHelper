import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImpuestoDto } from './dto/create-impuesto.dto';
import { UpdateImpuestoDto } from './dto/update-impuesto.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Impuesto } from './entities/impuesto.entity';

@Injectable()
export class ImpuestoService {
  constructor(
    @InjectRepository(Impuesto)
    private impuestoRepository: Repository<Impuesto>,
  ) {}

  async create(createImpuestoDto: CreateImpuestoDto) {
    const impuesto = new Impuesto(
      createImpuestoDto.type,
      createImpuestoDto.description,
    );
    return await this.impuestoRepository.save(impuesto);
  }

  async findAll() {
    return await this.impuestoRepository.find();
  }

  async findOne(id: number) {
    return await this.impuestoRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Impuesto | null> {
    const impuesto = await this.impuestoRepository.findOneBy({ id });
    if (!impuesto) {
      throw new NotFoundException(`Impuesto con id ${id} no encontrado`);
    }
    return impuesto;
  }

  async update(id: number, updateImpuestoDto: UpdateImpuestoDto) {
    const impuesto = await this.findOneOrFail(id);
    if (updateImpuestoDto.type) {
      impuesto.setType(updateImpuestoDto.type);
    }
    if (updateImpuestoDto.description) {
      impuesto.setDescription(updateImpuestoDto.description);
    }
    return await this.impuestoRepository.save(impuesto);
  }

  async remove(id: number) {
    return await this.impuestoRepository.softDelete({ id });
  }
}
