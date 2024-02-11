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

@Injectable()
export class SiembraService {
  constructor(
    @InjectRepository(Siembra)
    private siembrasRepository: Repository<Siembra>,
    private cicloService: CicloService,
    private granoService: GranoService,
    private tratamientoService: TratamientoService,
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
    const siembra = new Siembra(
      createSiembraDto.date,
      createSiembraDto.density,
      createSiembraDto.depth,
      createSiembraDto.costGrain,
      tratamiento,
      grano,
      ciclo,
    );
    return await this.siembrasRepository.save(siembra);
  }

  async findAll(): Promise<Siembra[]> {
    const siembras = await this.siembrasRepository.find();
    return siembras;
  }

  async findOne(id: number): Promise<Siembra | null> {
    const siembra = await this.siembrasRepository.findOneBy({ id });
    return siembra;
  }

  async findOneOrFail(id: number): Promise<Siembra | null> {
    const siembra = await this.siembrasRepository.findOneBy({ id });
    if (!siembra) {
      throw new NotFoundException(`Siembra con id ${id} no encontrada`);
    }
    return siembra;
  }

  update(id: number, updateSiembraDto: UpdateSiembraDto) {
    return `This action updates a #${id} siembra`;
  }

  async remove(id: number): Promise<void> {
    await this.siembrasRepository.delete(id);
  }
}
