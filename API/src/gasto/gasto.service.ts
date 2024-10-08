import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Gasto } from './entities/gasto.entity';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';

@Injectable()
export class GastoService {
  constructor(
    @InjectRepository(Gasto)
    private readonly gastoRepository: Repository<Gasto>,
    private readonly cicloService: CicloService,
    private readonly contratistaService: ContratistaService,
  ) {}

  async create(createGastoDto: CreateGastoDto) {
    const ciclo = await this.cicloService.findOneOrFail(createGastoDto.cicloId);

    const gasto = new Gasto(
      new Date(createGastoDto.startDate),
      createGastoDto.type,
      createGastoDto.cost,
      createGastoDto.description,
      ciclo,
    );
    return await this.gastoRepository.save(gasto);
  }

  async findAll() {
    return await this.gastoRepository.find();
  }

  async findOne(id: number) {
    return await this.gastoRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Gasto | null> {
    const gasto = await this.gastoRepository.findOneBy({ id });
    if (!gasto) {
      throw new NotFoundException(`Gasto con id ${id} no encontrado`);
    }
    return gasto;
  }

  async update(id: number, updateGastoDto: UpdateGastoDto) {
    const gasto = await this.findOneOrFail(id);
    if (updateGastoDto.startDate) {
      gasto.setStartDate(new Date(updateGastoDto.startDate));
    }
    if (updateGastoDto.endDate) {
      gasto.setEndDate(new Date(updateGastoDto.endDate));
    }
    if (updateGastoDto.type) {
      gasto.setType(updateGastoDto.type);
    }
    if (updateGastoDto.cost) {
      gasto.setCost(updateGastoDto.cost);
    }
    if (updateGastoDto.contractorCost) {
      gasto.setContractorCost(updateGastoDto.contractorCost);
    }
    if (updateGastoDto.description) {
      gasto.setDescription(updateGastoDto.description);
    }
    if (updateGastoDto.contratistaId) {
      const contratista = await this.contratistaService.findOneOrFail(
        updateGastoDto.contratistaId,
      );
      gasto.setContratista(contratista);
    }
    if (updateGastoDto.cicloId) {
      const ciclo = await this.cicloService.findOneOrFail(
        updateGastoDto.cicloId,
      );
      gasto.setCiclo(ciclo);
    }
    return await this.gastoRepository.save(gasto);
  }

  async remove(id: number) {
    return await this.gastoRepository.softDelete({ id });
  }
}
