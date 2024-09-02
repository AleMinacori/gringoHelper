import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCosechaDto } from './dto/create-cosecha.dto';
import { UpdateCosechaDto } from './dto/update-cosecha.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cosecha } from './entities/cosecha.entity';
import { ContratistaService } from '../contratista/contratista.service';
import { CicloService } from '../ciclo/ciclo.service';

@Injectable()
export class CosechaService {
  constructor(
    @InjectRepository(Cosecha)
    private readonly cosechaRepository: Repository<Cosecha>,
    private readonly contratistaService: ContratistaService,
    private readonly cicloService: CicloService,
  ) {}

  async create(createCosechaDto: CreateCosechaDto) {
    const contratista = await this.contratistaService.findOneOrFail(
      createCosechaDto.contratistaId,
    );
    const ciclo = await this.cicloService.findOneOrFail(
      createCosechaDto.cicloId,
    );

    const cosecha = new Cosecha(
      new Date(createCosechaDto.startDate),
      createCosechaDto.humidity,
      createCosechaDto.tons,
      createCosechaDto.contractorCost,
      contratista,
      ciclo,
    );
    return await this.cosechaRepository.save(cosecha);
  }

  async findAll() {
    return await this.cosechaRepository.find();
  }

  async findOne(id: number) {
    return await this.cosechaRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Cosecha | null> {
    const cosecha = await this.cosechaRepository.findOneBy({ id });
    if (!cosecha) {
      throw new NotFoundException(`Cosecha con id ${id} no encontrado`);
    }
    return cosecha;
  }

  async update(id: number, updateCosechaDto: UpdateCosechaDto) {
    const cosecha = await this.findOneOrFail(id);
    if (updateCosechaDto.startDate) {
      cosecha.setStartDate(new Date(updateCosechaDto.startDate));
    }
    if (updateCosechaDto.endDate) {
      cosecha.setEndDate(new Date(updateCosechaDto.endDate));
    }
    if (updateCosechaDto.humidity) {
      cosecha.setHumidity(updateCosechaDto.humidity);
    }
    if (updateCosechaDto.tons) {
      cosecha.setTons(updateCosechaDto.tons);
    }
    if (updateCosechaDto.contractorCost) {
      cosecha.setContractorCost(updateCosechaDto.contractorCost);
    }
    if (updateCosechaDto.contratistaId) {
      const contratista = await this.contratistaService.findOneOrFail(
        updateCosechaDto.contratistaId,
      );
      cosecha.setContratista(contratista);
    }
    if (updateCosechaDto.cicloId) {
      const ciclo = await this.cicloService.findOneOrFail(
        updateCosechaDto.cicloId,
      );
      cosecha.setCiclo(ciclo);
    }
    return await this.cosechaRepository.save(cosecha);
  }

  async remove(id: number) {
    return await this.cosechaRepository.softDelete({ id });
  }
}
