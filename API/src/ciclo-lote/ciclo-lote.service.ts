import { Injectable } from '@nestjs/common';
import { CreateCicloLoteDto } from './dto/create-ciclo-lote.dto';
import { UpdateCicloLoteDto } from './dto/update-ciclo-lote.dto';

@Injectable()
export class CicloLoteService {
  create(createCicloLoteDto: CreateCicloLoteDto) {
    return 'This action adds a new cicloLote';
  }

  findAll() {
    return `This action returns all cicloLote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cicloLote`;
  }

  update(id: number, updateCicloLoteDto: UpdateCicloLoteDto) {
    return `This action updates a #${id} cicloLote`;
  }

  remove(id: number) {
    return `This action removes a #${id} cicloLote`;
  }
}
