import { Injectable } from '@nestjs/common';
import { UpdateCicloImpuestoDto } from './dto/update-ciclo-impuesto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CicloImpuesto } from './entities/ciclo-impuesto.entity';
import { Repository } from 'typeorm';
import { ImpuestoService } from '../impuesto/impuesto.service';
import { Ciclo } from '../ciclo/entities/ciclo.entity';

@Injectable()
export class CicloImpuestoService {
  constructor(
    @InjectRepository(CicloImpuesto)
    private readonly cicloImpuestoRepository: Repository<CicloImpuesto>,
    private readonly impuestoService: ImpuestoService,
  ) {}

  async create(impuestoId: number, ciclo: Ciclo) {
    const impuesto = await this.impuestoService.findOneOrFail(impuestoId);
    const cicloImpuesto = new CicloImpuesto(ciclo, impuesto);
    return await this.cicloImpuestoRepository.save(cicloImpuesto);
  }

  async findAll() {
    return await this.cicloImpuestoRepository.find();
  }

  async findOne(id: number) {
    return await this.cicloImpuestoRepository.findOneBy({ id });
  }

  async update(id: number, updateCicloImpuestoDto: UpdateCicloImpuestoDto) {
    return await `This action updates a #${id} cicloImpuesto`;
  }

  async remove(id: number) {
    return await this.cicloImpuestoRepository.softDelete({ id });
  }
}
