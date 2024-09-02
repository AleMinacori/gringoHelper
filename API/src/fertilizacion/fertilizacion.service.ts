import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFertilizacionDto } from './dto/create-fertilizacion.dto';
import { UpdateFertilizacionDto } from './dto/update-fertilizacion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Fertilizacion } from './entities/fertilizacion.entity';
import { AplicacionService } from '../aplicacion/aplicacion.service';
import { ContratistaService } from '../contratista/contratista.service';
import { CicloService } from '../ciclo/ciclo.service';

@Injectable()
export class FertilizacionService {
  constructor(
    @InjectRepository(Fertilizacion)
    private readonly fertilizacionRepository: Repository<Fertilizacion>,
    private readonly aplicacionService: AplicacionService,
    private readonly contratistaService: ContratistaService,
    private readonly cicloService: CicloService,
  ) {}

  async create(createFertilizacionDto: CreateFertilizacionDto) {
    const ciclo = await this.cicloService.findOneOrFail(
      createFertilizacionDto.cicloId,
    );
    const contratista = await this.contratistaService.findOneOrFail(
      createFertilizacionDto.contratistaId,
    );

    let fertilizacion = new Fertilizacion(
      new Date(createFertilizacionDto.startDate),
      createFertilizacionDto.contractorCost,
      contratista,
      ciclo,
    );

    fertilizacion = await this.fertilizacionRepository.save(fertilizacion);

    await this.aplicacionService.createFertilizacion(
      {
        productCost: createFertilizacionDto.productCost,
        quantity: createFertilizacionDto.quantity,
        description: createFertilizacionDto.description,
        productoId: createFertilizacionDto.productoId,
      },
      fertilizacion,
    );
    return await this.fertilizacionRepository.save(fertilizacion);
  }

  async findAll() {
    return await this.fertilizacionRepository.find();
  }

  async findOne(id: number) {
    return await this.fertilizacionRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Fertilizacion | null> {
    const fertilizacion = await this.fertilizacionRepository.findOneBy({
      id,
    });
    if (!fertilizacion) {
      throw new NotFoundException(`Fertilizacion con id ${id} no encontrado`);
    }
    return fertilizacion;
  }

  async update(id: number, updateFertilizacionDto: UpdateFertilizacionDto) {
    const fertilizacion = await this.findOneOrFail(id);
    if (updateFertilizacionDto.startDate) {
      fertilizacion.setStartDate(new Date(updateFertilizacionDto.startDate));
    }
    if (updateFertilizacionDto.endDate) {
      fertilizacion.setEndDate(new Date(updateFertilizacionDto.endDate));
    }
    if (updateFertilizacionDto.contractorCost) {
      fertilizacion.setContractorCost(updateFertilizacionDto.contractorCost);
    }
    if (updateFertilizacionDto.contratistaId) {
      const contratista = await this.contratistaService.findOneOrFail(
        updateFertilizacionDto.contratistaId,
      );
      fertilizacion.setContratista(contratista);
    }
    if (updateFertilizacionDto.cicloId) {
      const ciclo = await this.cicloService.findOneOrFail(
        updateFertilizacionDto.cicloId,
      );
      fertilizacion.setCiclo(ciclo);
    }
    return await this.fertilizacionRepository.save(fertilizacion);
  }

  async remove(id: number) {
    return await this.fertilizacionRepository.softDelete({ id });
  }
}
