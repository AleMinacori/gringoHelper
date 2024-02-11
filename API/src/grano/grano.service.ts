import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGranoDto } from './dto/create-grano.dto';
import { UpdateGranoDto } from './dto/update-grano.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grano } from './entities/grano.entity';

@Injectable()
export class GranoService {
  constructor(
    @InjectRepository(Grano)
    private granosRepository: Repository<Grano>,
  ) {}

  async create(createGranoDto: CreateGranoDto): Promise<Grano> {
    const grano = new Grano(
      createGranoDto.type,
      createGranoDto.brand,
      createGranoDto.variety,
    );
    return await this.granosRepository.save(grano);
  }

  async findAll(): Promise<Grano[]> {
    const granos = await this.granosRepository.find();
    return granos;
  }

  async findOne(id: number): Promise<Grano | null> {
    const grano = await this.granosRepository.findOneBy({ id });
    return grano;
  }

  async findOneOrFail(id: number): Promise<Grano | null> {
    const grano = await this.granosRepository.findOneBy({ id });
    if (!grano) {
      throw new NotFoundException(`Grano con id ${id} no encontrado`);
    }
    return grano;
  }

  async update(id: number, updateGranoDto: UpdateGranoDto): Promise<Grano> {
    const grano = await this.findOneOrFail(id);
    grano.setType(updateGranoDto.type);
    return await this.granosRepository.save(grano);
  }

  async remove(id: number): Promise<void> {
    await this.granosRepository.delete(id);
  }
}
