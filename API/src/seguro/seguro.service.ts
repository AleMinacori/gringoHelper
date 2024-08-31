import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeguroDto } from './dto/create-seguro.dto';
import { UpdateSeguroDto } from './dto/update-seguro.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Seguro } from './entities/seguro.entity';
import { CicloService } from '../ciclo/ciclo.service';

@Injectable()
export class SeguroService {
  constructor(
    @InjectRepository(Seguro)
    private readonly seguroRepository: Repository<Seguro>,
    private readonly cicloService: CicloService,
  ) {}

  async create(createSeguroDto: CreateSeguroDto) {
    const ciclo = await this.cicloService.findOneOrFail(
      createSeguroDto.cicloId,
    );
    const seguro = new Seguro(
      createSeguroDto.startDate,
      createSeguroDto.endDate,
      createSeguroDto.type,
      createSeguroDto.cost,
      createSeguroDto.description,
      ciclo,
    );
    return await this.seguroRepository.save(seguro);
  }

  async findAll() {
    const seguros = await this.seguroRepository.find();
    return seguros;
  }

  async findOne(id: number) {
    const seguro = await this.seguroRepository.findOneBy({ id });
    return seguro;
  }

  async findOneOrFail(id: number): Promise<Seguro | null> {
    const seguro = await this.seguroRepository.findOneBy({ id });
    if (!seguro) {
      throw new NotFoundException(`Seguro con id ${id} no encontrado`);
    }
    return seguro;
  }

  async update(id: number, updateSeguroDto: UpdateSeguroDto) {
    return await `This action updates a #${id} seguro`;
  }

  async remove(id: number) {
    return await this.seguroRepository.softDelete({ id });
  }
}
