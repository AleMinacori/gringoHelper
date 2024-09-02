import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSiembraDto } from './dto/create-siembra.dto';
import { UpdateSiembraDto } from './dto/update-siembra.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Siembra } from './entities/siembra.entity';

import { GranoService } from '../grano/grano.service';
import { CicloService } from '../ciclo/ciclo.service';
import { TratamientoService } from '../tratamiento/tratamiento.service';
import { Lote } from '../lote/entities/lote.entity';
import { ContratistaService } from '../contratista/contratista.service';

@Injectable()
export class SiembraService {
  constructor(
    @InjectRepository(Siembra)
    private readonly siembraRepository: Repository<Siembra>,
    private readonly cicloService: CicloService,
    private readonly granoService: GranoService,
    private readonly tratamientoService: TratamientoService,
    private readonly contratistaService: ContratistaService,
  ) {}

  async create(createSiembraDto: CreateSiembraDto) {
    const ciclo = await this.cicloService.findOneOrFail(
      createSiembraDto.cicloId,
    );
    const grano = await this.granoService.findOneOrFail(
      createSiembraDto.granoId,
    );
    const tratamiento = await this.tratamientoService.findOneOrFail(
      createSiembraDto.tratamientoId,
    );
    const contratista = await this.contratistaService.findOneOrFail(
      createSiembraDto.contratistaId,
    );
    const siembra = new Siembra(
      new Date(createSiembraDto.startDate),
      createSiembraDto.density,
      createSiembraDto.depth,
      createSiembraDto.seedCost,
      createSiembraDto.contractorCost,
      tratamiento,
      grano,
      contratista,
      ciclo,
    );
    return await this.siembraRepository.save(siembra);
  }

  async findAll(): Promise<Siembra[]> {
    return await this.siembraRepository.find();
  }

  async findOne(id: number): Promise<Siembra | null> {
    return await this.siembraRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Siembra | null> {
    const siembra = await this.siembraRepository.findOneBy({ id });
    if (!siembra) {
      throw new NotFoundException(`Siembra con id ${id} no encontrada`);
    }
    return siembra;
  }

  async update(id: number, updateSiembraDto: UpdateSiembraDto) {
    const siembra = await this.findOneOrFail(id);
    if (updateSiembraDto.startDate) {
      siembra.setStartDate(new Date(updateSiembraDto.startDate));
    }
    if (updateSiembraDto.endDate) {
      siembra.setEndDate(new Date(updateSiembraDto.endDate));
    }
    if (updateSiembraDto.density) {
      siembra.setDensity(updateSiembraDto.density);
    }
    if (updateSiembraDto.depth) {
      siembra.setDepth(updateSiembraDto.depth);
    }
    if (updateSiembraDto.seedCost) {
      siembra.setSeedCost(updateSiembraDto.seedCost);
    }
    if (updateSiembraDto.contractorCost) {
      siembra.setContractorCost(updateSiembraDto.contractorCost);
    }
    if (updateSiembraDto.granoId) {
      const grano = await this.granoService.findOneOrFail(
        updateSiembraDto.granoId,
      );
      siembra.setGrano(grano);
    }
    if (updateSiembraDto.tratamientoId) {
      const tratamiento = await this.tratamientoService.findOneOrFail(
        updateSiembraDto.tratamientoId,
      );
      siembra.setTratamiento(tratamiento);
    }
    if (updateSiembraDto.contratistaId) {
      const contratista = await this.contratistaService.findOneOrFail(
        updateSiembraDto.contratistaId,
      );
      siembra.setContratista(contratista);
    }
    if (updateSiembraDto.cicloId) {
      const ciclo = await this.cicloService.findOneOrFail(
        updateSiembraDto.cicloId,
      );
      siembra.setCiclo(ciclo);
    }
    return await this.siembraRepository.save(siembra);
  }

  async remove(id: number) {
    return await this.siembraRepository.softDelete(id);
  }
}
