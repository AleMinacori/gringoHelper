import { Injectable } from '@nestjs/common';
import { CreateCicloImpuestoDto } from './dto/create-ciclo-impuesto.dto';
import { UpdateCicloImpuestoDto } from './dto/update-ciclo-impuesto.dto';

@Injectable()
export class CicloImpuestoService {
  create(createCicloImpuestoDto: CreateCicloImpuestoDto) {
    return 'This action adds a new cicloImpuesto';
  }

  findAll() {
    return `This action returns all cicloImpuesto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cicloImpuesto`;
  }

  update(id: number, updateCicloImpuestoDto: UpdateCicloImpuestoDto) {
    return `This action updates a #${id} cicloImpuesto`;
  }

  remove(id: number) {
    return `This action removes a #${id} cicloImpuesto`;
  }
}
