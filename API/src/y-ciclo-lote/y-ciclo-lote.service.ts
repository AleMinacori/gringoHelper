import { Injectable } from '@nestjs/common';
import { CreateYCicloLoteDto } from './dto/create-y-ciclo-lote.dto';
import { UpdateYCicloLoteDto } from './dto/update-y-ciclo-lote.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { YCicloLote } from './entities/y-ciclo-lote.entity';
import { CicloService } from '../ciclo/ciclo.service';
import { LoteService } from '../lote/lote.service';

@Injectable()
export class YCicloLoteService {
  constructor(
    @InjectRepository(YCicloLote)
    private yCicloLoteRepository: Repository<YCicloLote>,
    private cicloService: CicloService,
    private loteService: LoteService,
  ) {}

  async create(createYCicloLoteDto: CreateYCicloLoteDto) {
    const ciclo = await this.cicloService.findOneOrFail(
      createYCicloLoteDto.cicloId,
    );
    const lote = await this.loteService.findOneOrFail(
      createYCicloLoteDto.loteId,
    );
    const yCicloLote = new YCicloLote(ciclo, lote);
    return await this.yCicloLoteRepository.save(yCicloLote);
  }

  findAll() {
    return `This action returns all yCicloLote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} yCicloLote`;
  }

  update(id: number, updateYCicloLoteDto: UpdateYCicloLoteDto) {
    return `This action updates a #${id} yCicloLote`;
  }

  remove(id: number) {
    return `This action removes a #${id} yCicloLote`;
  }
}
