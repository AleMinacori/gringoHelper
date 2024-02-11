import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { GranoService } from './grano.service';
import { CreateGranoDto } from './dto/create-grano.dto';
import { UpdateGranoDto } from './dto/update-grano.dto';

@Controller('grano')
export class GranoController {
  constructor(private readonly granoService: GranoService) {}

  @Post()
  create(@Body() createGranoDto: CreateGranoDto) {
    return this.granoService.create(createGranoDto);
  }

  @Get()
  findAll() {
    return this.granoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.granoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGranoDto: UpdateGranoDto) {
    return this.granoService.update(+id, updateGranoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.granoService.remove(+id);
  }
}
