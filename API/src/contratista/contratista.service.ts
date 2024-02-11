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
    private contratistasRepository: Repository<Contratista>,
  ) {}

  create(createContratistaDto: CreateContratistaDto) {
    return 'This action adds a new contratista';
  }

  async findAll() {
    const contratistas = await this.contratistasRepository.find();
    return contratistas;
  }

  async findOne(id: number) {
    const contratista = await this.contratistasRepository.findOneBy({ id });
    return contratista;
  }

  async findOneOrFail(id: number): Promise<Contratista | null> {
    const contratista = await this.contratistasRepository.findOneBy({ id });
    if (!contratista) {
      throw new NotFoundException(`Contratista con id ${id} no encontrado`);
    }
    return contratista;
  }

  update(id: number, updateContratistaDto: UpdateContratistaDto) {
    return `This action updates a #${id} contratista`;
  }

  remove(id: number) {
    return `This action removes a #${id} contratista`;
  }
}
