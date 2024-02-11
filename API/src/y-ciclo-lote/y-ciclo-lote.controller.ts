import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YCicloLoteService } from './y-ciclo-lote.service';
import { CreateYCicloLoteDto } from './dto/create-y-ciclo-lote.dto';
import { UpdateYCicloLoteDto } from './dto/update-y-ciclo-lote.dto';

@Controller('y-ciclo-lote')
export class YCicloLoteController {
  constructor(private readonly yCicloLoteService: YCicloLoteService) {}

  @Post()
  create(@Body() createYCicloLoteDto: CreateYCicloLoteDto) {
    return this.yCicloLoteService.create(createYCicloLoteDto);
  }

  @Get()
  findAll() {
    return this.yCicloLoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yCicloLoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYCicloLoteDto: UpdateYCicloLoteDto) {
    return this.yCicloLoteService.update(+id, updateYCicloLoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yCicloLoteService.remove(+id);
  }
}
