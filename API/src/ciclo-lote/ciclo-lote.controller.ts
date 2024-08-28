import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CicloLoteService } from './ciclo-lote.service';
import { CreateCicloLoteDto } from './dto/create-ciclo-lote.dto';
import { UpdateCicloLoteDto } from './dto/update-ciclo-lote.dto';

@Controller('ciclo-lote')
export class CicloLoteController {
  constructor(private readonly cicloLoteService: CicloLoteService) {}

  @Post()
  create(@Body() createCicloLoteDto: CreateCicloLoteDto) {
    return this.cicloLoteService.create(createCicloLoteDto);
  }

  @Get()
  findAll() {
    return this.cicloLoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cicloLoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCicloLoteDto: UpdateCicloLoteDto) {
    return this.cicloLoteService.update(+id, updateCicloLoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cicloLoteService.remove(+id);
  }
}
