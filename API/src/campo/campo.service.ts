import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampoDto } from './dto/create-campo.dto';
import { UpdateCampoDto } from './dto/update-campo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Campo } from './entities/campo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CampoService {
  constructor(
    @InjectRepository(Campo)
    private readonly campoRepository: Repository<Campo>,
  ) {}

  async create(createCampoDto: CreateCampoDto) {
    const campo = new Campo(createCampoDto.name);
    return await this.campoRepository.save(campo);
  }

  async findAll() {
    return await this.campoRepository.find();
  }

  async findOne(id: number) {
    return await this.campoRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number) {
    const campo = await this.campoRepository.findOneBy({ id });
    if (!campo) {
      throw new NotFoundException(`Campo con id ${id} no encontrado`);
    }
    return campo;
  }

  async update(id: number, updateCampoDto: UpdateCampoDto) {
    const campo = await this.findOneOrFail(id);
    if (updateCampoDto.name) {
      campo.setName(updateCampoDto.name);
    }
    return await this.campoRepository.save(campo);
  }

  async remove(id: number) {
    return await this.campoRepository.softDelete(id);
  }
}
