import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FertilizacionService } from './fertilizacion.service';
import { CreateFertilizacionDto } from './dto/create-fertilizacion.dto';
import { UpdateFertilizacionDto } from './dto/update-fertilizacion.dto';

@Controller('fertilizacion')
export class FertilizacionController {
  constructor(private readonly fertilizacionService: FertilizacionService) {}

  @Post()
  create(@Body() createFertilizacionDto: CreateFertilizacionDto) {
    return this.fertilizacionService.create(createFertilizacionDto);
  }

  @Get()
  findAll() {
    return this.fertilizacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fertilizacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFertilizacionDto: UpdateFertilizacionDto,
  ) {
    return this.fertilizacionService.update(+id, updateFertilizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fertilizacionService.remove(+id);
  }
}
