import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { CreateTransporteDto } from './dto/create-transporte.dto';
import { UpdateTransporteDto } from './dto/update-transporte.dto';

@Controller('transporte')
export class TransporteController {
  constructor(private readonly transporteService: TransporteService) {}

  @Post()
  create(@Body() createTransporteDto: CreateTransporteDto) {
    return this.transporteService.create(createTransporteDto);
  }

  @Get()
  findAll() {
    return this.transporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transporteService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransporteDto: UpdateTransporteDto,
  ) {
    return this.transporteService.update(+id, updateTransporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transporteService.remove(+id);
  }
}
