import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZCicloContratistaTransporteDto } from './dto/create-z-ciclo-contratista-transporte.dto';
import { UpdateZCicloContratistaTransporteDto } from './dto/update-z-ciclo-contratista-transporte.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ZCicloContratistaTransporte } from './entities/z-ciclo-contratista-transporte.entity';

@Injectable()
export class ZCicloContratistaTransporteService {
  constructor(
    @InjectRepository(ZCicloContratistaTransporte)
    private zCicloContratistaTransporteRepository: Repository<ZCicloContratistaTransporte>,
  ) {}

  create(
    createZCicloContratistaTransporteDto: CreateZCicloContratistaTransporteDto,
  ) {
    return 'This action adds a new zCicloContratistaTransporte';
  }

  findAll() {
    return `This action returns all zCicloContratistaTransporte`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zCicloContratistaTransporte`;
  }

  async findOneOrFail(id: number): Promise<ZCicloContratistaTransporte | null> {
    const zCicloContratistaTransporte =
      await this.zCicloContratistaTransporteRepository.findOneBy({ id });
    if (!zCicloContratistaTransporte) {
      throw new NotFoundException(
        `ZCicloContratistaTransporte con id ${id} no encontrada`,
      );
    }
    return zCicloContratistaTransporte;
  }

  update(
    id: number,
    updateZCicloContratistaTransporteDto: UpdateZCicloContratistaTransporteDto,
  ) {
    return `This action updates a #${id} zCicloContratistaTransporte`;
  }

  remove(id: number) {
    return `This action removes a #${id} zCicloContratistaTransporte`;
  }
}
