import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FumigacionService } from './fumigacion.service';
import { CreateFumigacionDto } from './dto/create-fumigacion.dto';
import { UpdateFumigacionDto } from './dto/update-fumigacion.dto';

@Controller('fumigacion')
export class FumigacionController {
  constructor(private readonly fumigacionService: FumigacionService) {}

  @Post()
  create(@Body() createFumigacionDto: CreateFumigacionDto) {
    return this.fumigacionService.create(createFumigacionDto);
  }

  @Get()
  findAll() {
    return this.fumigacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fumigacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFumigacionDto: UpdateFumigacionDto,
  ) {
    return this.fumigacionService.update(+id, updateFumigacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fumigacionService.remove(+id);
  }
}
