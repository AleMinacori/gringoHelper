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
      createSiembraDto.startDate,
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

  update(id: number, updateSiembraDto: UpdateSiembraDto) {
    return `This action updates a #${id} siembra`;
  }

  async remove(id: number) {
    return await this.siembraRepository.softDelete(id);
  }
}
