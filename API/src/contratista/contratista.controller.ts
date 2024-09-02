import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ContratistaService } from './contratista.service';
import { CreateContratistaDto } from './dto/create-contratista.dto';
import { UpdateContratistaDto } from './dto/update-contratista.dto';

@Controller('contratista')
export class ContratistaController {
  constructor(private readonly contratistaService: ContratistaService) {}

  @Post()
  create(@Body() createContratistaDto: CreateContratistaDto) {
    return this.contratistaService.create(createContratistaDto);
  }

  @Get()
  findAll() {
    return this.contratistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contratistaService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateContratistaDto: UpdateContratistaDto,
  ) {
    return this.contratistaService.update(+id, updateContratistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contratistaService.remove(+id);
  }
}
