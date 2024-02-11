import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lote } from './entities/lote.entity';

@Injectable()
export class LoteService {
  constructor(
    @InjectRepository(Lote)
    private lotesRepository: Repository<Lote>,
  ) {}

  async create(createLoteDto: CreateLoteDto): Promise<Lote> {
    const lote = new Lote(createLoteDto.name, createLoteDto.area);
    return await this.lotesRepository.save(lote);
  }

  async findAll(): Promise<Lote[]> {
    const lotes = await this.lotesRepository.find();
    return lotes;
  }

  async findOne(id: number): Promise<Lote | null> {
    const lote = await this.lotesRepository.findOneBy({ id });
    return lote;
  }

  async findOneOrFail(id: number): Promise<Lote | null> {
    const lote = await this.lotesRepository.findOneBy({ id });
    if (!lote) {
      throw new NotFoundException(`Lote con id ${id} no encontrada`);
    }
    return lote;
  }

  async update(id: number, updateLoteDto: UpdateLoteDto): Promise<Lote> {
    const lote = await this.findOneOrFail(id);
    lote.setName(updateLoteDto.name);
    lote.setArea(updateLoteDto.area);
    return await this.lotesRepository.save(lote);
  }

  async remove(id: number): Promise<void> {
    await this.lotesRepository.delete(id);
  }
}
