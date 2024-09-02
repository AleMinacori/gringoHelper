import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContratistaDto } from './dto/create-contratista.dto';
import { UpdateContratistaDto } from './dto/update-contratista.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contratista } from './entities/contratista.entity';

@Injectable()
export class ContratistaService {
  constructor(
    @InjectRepository(Contratista)
    private readonly contratistaRepository: Repository<Contratista>,
  ) {}

  async create(createContratistaDto: CreateContratistaDto) {
    const contratista = new Contratista(
      createContratistaDto.name,
      createContratistaDto.lastname,
      createContratistaDto.cbu,
      createContratistaDto.alias,
    );
    return await this.contratistaRepository.save(contratista);
  }

  async findAll() {
    return await this.contratistaRepository.find();
  }

  async findOne(id: number) {
    return await this.contratistaRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Contratista | null> {
    const contratista = await this.contratistaRepository.findOneBy({ id });
    if (!contratista) {
      throw new NotFoundException(`Contratista con id ${id} no encontrado`);
    }
    return contratista;
  }

  async update(id: number, updateContratistaDto: UpdateContratistaDto) {
    const contratista = await this.findOneOrFail(id);
    if (updateContratistaDto.name) {
      contratista.setName(updateContratistaDto.name);
    }
    if (updateContratistaDto.lastname) {
      contratista.setLastname(updateContratistaDto.lastname);
    }
    if (updateContratistaDto.cbu) {
      contratista.setCbu(updateContratistaDto.cbu);
    }
    if (updateContratistaDto.alias) {
      contratista.setAlias(updateContratistaDto.alias);
    }
    return await this.contratistaRepository.save(contratista);
  }

  async remove(id: number) {
    return await this.contratistaRepository.softDelete({ id });
  }
}
