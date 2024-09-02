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
      new Date(createSeguroDto.startDate),
      new Date(createSeguroDto.endDate),
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
    const seguro = await this.findOneOrFail(id);
    if (updateSeguroDto.startDate) {
      seguro.setStartDate(new Date(updateSeguroDto.startDate));
    }
    if (updateSeguroDto.endDate) {
      seguro.setEndDate(new Date(updateSeguroDto.endDate));
    }
    if (updateSeguroDto.type) {
      seguro.setType(updateSeguroDto.type);
    }
    if (updateSeguroDto.cost) {
      seguro.setCost(updateSeguroDto.cost);
    }
    if (updateSeguroDto.description) {
      seguro.setDescription(updateSeguroDto.description);
    }
    if (updateSeguroDto.cicloId) {
      const ciclo = await this.cicloService.findOneOrFail(
        updateSeguroDto.cicloId,
      );
      seguro.setCiclo(ciclo);
    }
    return await this.seguroRepository.save(seguro);
  }

  async remove(id: number) {
    return await this.seguroRepository.softDelete({ id });
  }
}
