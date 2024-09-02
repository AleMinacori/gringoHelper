import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ciclo } from './entities/ciclo.entity';
import { CicloLoteService } from '../ciclo-lote/ciclo-lote.service';
import { CicloImpuestoService } from '../ciclo-impuesto/ciclo-impuesto.service';
import { AssignLoteCicloDto } from './dto/assign-lote-ciclo.dto';
import { AssignImpuestoCicloDto } from './dto/assign-impuesto-ciclo.dto';

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
    if (updateCicloDto.name) {
      ciclo.setName(updateCicloDto.name);
    }
    if (updateCicloDto.startDate) {
      ciclo.setStartDate(new Date(updateCicloDto.startDate));
    }
    if (updateCicloDto.endDate) {
      ciclo.setEndDate(new Date(updateCicloDto.endDate));
    }
    if (updateCicloDto.state) {
      ciclo.setState(updateCicloDto.state);
    }
    return await this.cicloRepository.save(ciclo);
  }

  async remove(id: number) {
    return await this.cicloRepository.softDelete(id);
  }

  async assignLotes(assignLoteCicloDto: AssignLoteCicloDto, cicloId: number) {
    const ciclo = await this.findOneOrFail(cicloId);
    for (let i = 0; i < assignLoteCicloDto.lotesId.length; i++) {
      await this.cicloLoteService.create(assignLoteCicloDto.lotesId[i], ciclo);
    }
  }

  async assignImpuestos(
    assignImpuestoCicloDto: AssignImpuestoCicloDto,
    cicloId: number,
  ) {
    const ciclo = await this.findOneOrFail(cicloId);
    for (let i = 0; i < assignImpuestoCicloDto.impuestosId.length; i++) {
      await this.cicloImpuestoService.create(
        assignImpuestoCicloDto.impuestosId[i],
        ciclo,
      );
    }
  }
}
