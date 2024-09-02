import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CicloService } from './ciclo.service';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';
import { AssignLoteCicloDto } from './dto/assign-lote-ciclo.dto';
import { AssignImpuestoCicloDto } from './dto/assign-impuesto-ciclo.dto';

@Controller('ciclo')
export class CicloController {
  constructor(private readonly cicloService: CicloService) {}

  @Post()
  create(@Body() createCicloDto: CreateCicloDto) {
    return this.cicloService.create(createCicloDto);
  }

  @Get()
  findAll() {
    return this.cicloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cicloService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCicloDto: UpdateCicloDto) {
    return this.cicloService.update(+id, updateCicloDto);
  }

  @Put('lote:id')
  assignLote(
    @Param('id') id: string,
    @Body() assignLoteCicloDto: AssignLoteCicloDto,
  ) {
    return this.cicloService.assignLotes(assignLoteCicloDto, +id);
  }

  @Put('impuesto:id')
  assignImpuesto(
    @Param('id') id: string,
    @Body() assignImpuestoCicloDto: AssignImpuestoCicloDto,
  ) {
    return this.cicloService.assignImpuestos(assignImpuestoCicloDto, +id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cicloService.remove(+id);
  }
}
