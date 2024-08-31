import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransporteDto } from './dto/create-transporte.dto';
import { UpdateTransporteDto } from './dto/update-transporte.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transporte } from './entities/transporte.entity';
import { CicloService } from '../ciclo/ciclo.service';
import { ContratistaService } from '../contratista/contratista.service';

@Injectable()
export class TransporteService {
  constructor(
    @InjectRepository(Transporte)
    private readonly transporteRepository: Repository<Transporte>,
    private readonly cicloService: CicloService,
    private readonly contratistaService: ContratistaService,
  ) {}

  async create(createTransporteDto: CreateTransporteDto) {
    const ciclo = await this.cicloService.findOneOrFail(
      createTransporteDto.cicloId,
    );
    const contratista = await this.contratistaService.findOneOrFail(
      createTransporteDto.contratistaId,
    );
    const transporte = new Transporte(
      createTransporteDto.startDate,
      createTransporteDto.startPoint,
      createTransporteDto.endPoint,
      createTransporteDto.description,
      createTransporteDto.contractorCost,
      contratista,
      ciclo,
    );
    return await this.transporteRepository.save(transporte);
  }

  async findAll() {
    return await this.transporteRepository.find();
  }

  async findOne(id: number) {
    return await this.transporteRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Transporte | null> {
    const transporte = await this.transporteRepository.findOneBy({ id });
    if (!transporte) {
      throw new NotFoundException(`Transporte con id ${id} no encontrado`);
    }
    return transporte;
  }

  async update(id: number, updateTransporteDto: UpdateTransporteDto) {
    return await `This action updates a #${id} transporte`;
  }

  async remove(id: number) {
    return await this.transporteRepository.softDelete({ id });
  }
}
