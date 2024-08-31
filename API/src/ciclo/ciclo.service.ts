import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ciclo } from './entities/ciclo.entity';
import { CicloLoteService } from '../ciclo-lote/ciclo-lote.service';
import { CicloImpuestoService } from '../ciclo-impuesto/ciclo-impuesto.service';

@Injectable()
export class CicloService {
  constructor(
    @InjectRepository(Ciclo)
    private readonly cicloRepository: Repository<Ciclo>,
    private readonly cicloLoteService: CicloLoteService,
    private readonly cicloImpuestoService: CicloImpuestoService,
  ) {}

  async create(createCicloDto: CreateCicloDto) {
    const ciclo = new Ciclo(createCicloDto.name);
    return await this.cicloRepository.save(ciclo);
  }

  async findAll() {
    const ciclos = await this.cicloRepository.find();
    return ciclos;
  }

  async findOne(id: number) {
    const ciclo = await this.cicloRepository.findOneBy({ id });
    return ciclo;
  }

  async findOneOrFail(id: number): Promise<Ciclo | null> {
    const ciclo = await this.cicloRepository.findOneBy({ id });
    if (!ciclo) {
      throw new NotFoundException(`Ciclo con id ${id} no encontrado`);
    }
    return ciclo;
  }

  async findOneComplete(id: number) {
    const ciclo = await this.cicloRepository.findOneBy({ id });
    return ciclo;
  }

  async update(id: number, updateCicloDto: UpdateCicloDto) {
    const ciclo = await this.findOneOrFail(id);
    ciclo.setName(updateCicloDto.name);
    return await this.cicloRepository.save(ciclo);
  }

  async remove(id: number) {
    return await this.cicloRepository.softDelete(id);
  }

  async assignLotes(lotesId: number[], cicloId: number) {
    const ciclo = await this.findOneOrFail(cicloId);
    for (let i = 0; i < lotesId.length; i++) {
      await this.cicloLoteService.create(lotesId[i], ciclo);
    }
  }

  async assignImpuestos(impuestosId: number[], cicloId: number) {
    const ciclo = await this.findOneOrFail(cicloId);
    for (let i = 0; i < impuestosId.length; i++) {
      await this.cicloImpuestoService.create(impuestosId[i], ciclo);
    }
  }
}
