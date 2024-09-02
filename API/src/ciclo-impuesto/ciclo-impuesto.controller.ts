import { Controller, Get, Body, Put, Param, Delete } from '@nestjs/common';
import { CicloImpuestoService } from './ciclo-impuesto.service';
import { UpdateCicloImpuestoDto } from './dto/update-ciclo-impuesto.dto';

@Controller('ciclo-impuesto')
export class CicloImpuestoController {
  constructor(private readonly cicloImpuestoService: CicloImpuestoService) {}

  @Get()
  findAll() {
    return this.cicloImpuestoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cicloImpuestoService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCicloImpuestoDto: UpdateCicloImpuestoDto,
  ) {
    return this.cicloImpuestoService.update(+id, updateCicloImpuestoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cicloImpuestoService.remove(+id);
  }
}
