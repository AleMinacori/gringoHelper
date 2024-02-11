import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZCicloContratistaFertilizacionService } from './z-ciclo-contratista-fertilizacion.service';
import { CreateZCicloContratistaFertilizacionDto } from './dto/create-z-ciclo-contratista-fertilizacion.dto';
import { UpdateZCicloContratistaFertilizacionDto } from './dto/update-z-ciclo-contratista-fertilizacion.dto';

@Controller('z-ciclo-contratista-fertilizacion')
export class ZCicloContratistaFertilizacionController {
  constructor(
    private readonly zCicloContratistaFertilizacionService: ZCicloContratistaFertilizacionService,
  ) {}

  @Post()
  create(
    @Body()
    createZCicloContratistaFertilizacionDto: CreateZCicloContratistaFertilizacionDto,
  ) {
    return this.zCicloContratistaFertilizacionService.create(
      createZCicloContratistaFertilizacionDto,
    );
  }

  @Get()
  findAll() {
    return this.zCicloContratistaFertilizacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zCicloContratistaFertilizacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateZCicloContratistaFertilizacionDto: UpdateZCicloContratistaFertilizacionDto,
  ) {
    return this.zCicloContratistaFertilizacionService.update(
      +id,
      updateZCicloContratistaFertilizacionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zCicloContratistaFertilizacionService.remove(+id);
  }
}
