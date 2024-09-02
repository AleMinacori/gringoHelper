import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CampoService } from './campo.service';
import { CreateCampoDto } from './dto/create-campo.dto';
import { UpdateCampoDto } from './dto/update-campo.dto';

@Controller('campo')
export class CampoController {
  constructor(private readonly campoService: CampoService) {}

  @Post()
  create(@Body() createCampoDto: CreateCampoDto) {
    return this.campoService.create(createCampoDto);
  }

  @Get()
  findAll() {
    return this.campoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCampoDto: UpdateCampoDto) {
    return this.campoService.update(+id, updateCampoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campoService.remove(+id);
  }
}
