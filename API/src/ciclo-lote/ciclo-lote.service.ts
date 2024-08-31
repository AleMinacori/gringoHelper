import { Injectable } from '@nestjs/common';
import { CreateCicloLoteDto } from './dto/create-ciclo-lote.dto';
import { UpdateCicloLoteDto } from './dto/update-ciclo-lote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CicloLote } from './entities/ciclo-lote.entity';
import { Repository } from 'typeorm';
import { LoteService } from '../lote/lote.service';
import { Ciclo } from '../ciclo/entities/ciclo.entity';

@Injectable()
export class CicloLoteService {
  constructor(
    @InjectRepository(CicloLote)
    private readonly cicloLoteRepository: Repository<CicloLote>,
    private readonly loteService: LoteService,
  ) {}

  async create(loteId: number, ciclo: Ciclo) {
    const lote = await this.loteService.findOneOrFail(loteId);
    const cicloLote = new CicloLote(ciclo, lote);
    return await this.cicloLoteRepository.save(cicloLote);
  }

  async findAll() {
    return await this.cicloLoteRepository.find();
  }

  async findOne(id: number) {
    return await this.cicloLoteRepository.findOneBy({ id });
  }

  async update(id: number, updateCicloLoteDto: UpdateCicloLoteDto) {
    return `This action updates a #${id} cicloLote`;
  }

  async remove(id: number) {
    return await this.cicloLoteRepository.softDelete({ id });
  }
}
