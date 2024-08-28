import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lote } from './entities/lote.entity';
import { Campo } from '../campo/entities/campo.entity';
import { CampoService } from '../campo/campo.service';

@Injectable()
export class LoteService {
  constructor(
    @InjectRepository(Lote)
    private loteRepository: Repository<Lote>,
    private campoService: CampoService,
  ) {}

  async create(createLoteDto: CreateLoteDto): Promise<Lote> {
    const campo = await this.campoService.findOneOrFail(createLoteDto.campoId);

    const lote = new Lote(createLoteDto.name, createLoteDto.area, campo);
    return await this.loteRepository.save(lote);
  }

  async findAll(): Promise<Lote[]> {
    const lotes = await this.loteRepository.find();
    return lotes;
  }

  async findOne(id: number): Promise<Lote | null> {
    return await this.loteRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Lote | null> {
    const lote = await this.loteRepository.findOneBy({ id });
    if (!lote) {
      throw new NotFoundException(`Lote con id ${id} no encontrado`);
    }
    return lote;
  }

  async update(id: number, updateLoteDto: UpdateLoteDto): Promise<Lote> {
    const lote = await this.findOneOrFail(id);
    lote.setName(updateLoteDto.name);
    lote.setArea(updateLoteDto.area);
    return await this.loteRepository.save(lote);
  }

  async remove(id: number): Promise<void> {
    await this.loteRepository.softDelete(id);
  }
}
