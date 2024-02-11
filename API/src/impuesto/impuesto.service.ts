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
    private impuestosRepository: Repository<Impuesto>,
  ) {}

  create(createImpuestoDto: CreateImpuestoDto) {
    return 'This action adds a new impuesto';
  }

  async findAll() {
    const impuestos = await this.impuestosRepository.find();
    return impuestos;
  }

  async findOne(id: number) {
    const impuesto = await this.impuestosRepository.findOneBy({ id });
    return impuesto;
  }

  async findOneOrFail(id: number): Promise<Impuesto | null> {
    const impuesto = await this.impuestosRepository.findOneBy({ id });
    if (!impuesto) {
      throw new NotFoundException(`Impuesto con id ${id} no encontrado`);
    }
    return impuesto;
  }

  update(id: number, updateImpuestoDto: UpdateImpuestoDto) {
    return `This action updates a #${id} impuesto`;
  }

  remove(id: number) {
    return `This action removes a #${id} impuesto`;
  }
}
