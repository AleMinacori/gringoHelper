import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFumigacionDto } from './dto/create-fumigacion.dto';
import { UpdateFumigacionDto } from './dto/update-fumigacion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Fumigacion } from './entities/fumigacion.entity';
import { AplicacionService } from '../aplicacion/aplicacion.service';
import { ContratistaService } from '../contratista/contratista.service';
import { CicloService } from '../ciclo/ciclo.service';

@Injectable()
export class FumigacionService {
  constructor(
    @InjectRepository(Fumigacion)
    private fumigacionRepository: Repository<Fumigacion>,
    private readonly aplicacionService: AplicacionService,
    private readonly contratistaService: ContratistaService,
    private readonly cicloService: CicloService,
  ) {}

  async create(createFumigacionDto: CreateFumigacionDto) {
    const ciclo = await this.cicloService.findOneOrFail(
      createFumigacionDto.cicloId,
    );
    const contratista = await this.contratistaService.findOneOrFail(
      createFumigacionDto.contratistaId,
    );

    let fumigacion = new Fumigacion(
      createFumigacionDto.startDate,
      createFumigacionDto.contractorCost,
      contratista,
      ciclo,
    );

    fumigacion = await this.fumigacionRepository.save(fumigacion);

    await this.aplicacionService.createFumigacion(
      {
        productCost: createFumigacionDto.productCost,
        quantity: createFumigacionDto.quantity,
        description: createFumigacionDto.description,
        productoId: createFumigacionDto.productoId,
      },
      fumigacion,
    );

    return await this.fumigacionRepository.save(fumigacion);
  }

  async findAll() {
    return await this.fumigacionRepository.find();
  }

  async findOne(id: number) {
    return await this.fumigacionRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Fumigacion | null> {
    const fumigacion = await this.fumigacionRepository.findOneBy({ id });
    if (!fumigacion) {
      throw new NotFoundException(`Fumigacion con id ${id} no encontrado`);
    }
    return fumigacion;
  }

  async update(id: number, updateFumigacionDto: UpdateFumigacionDto) {
    return await `This action updates a #${id} fumigacion`;
  }

  async remove(id: number) {
    return await this.fumigacionRepository.softDelete({ id });
  }
}
