import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZCicloContratistaTransporteService } from './z-ciclo-contratista-transporte.service';
import { CreateZCicloContratistaTransporteDto } from './dto/create-z-ciclo-contratista-transporte.dto';
import { UpdateZCicloContratistaTransporteDto } from './dto/update-z-ciclo-contratista-transporte.dto';

@Controller('z-ciclo-contratista-transporte')
export class ZCicloContratistaTransporteController {
  constructor(
    private readonly zCicloContratistaTransporteService: ZCicloContratistaTransporteService,
  ) {}

  @Post()
  create(
    @Body()
    createZCicloContratistaTransporteDto: CreateZCicloContratistaTransporteDto,
  ) {
    return this.zCicloContratistaTransporteService.create(
      createZCicloContratistaTransporteDto,
    );
  }

  @Get()
  findAll() {
    return this.zCicloContratistaTransporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zCicloContratistaTransporteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateZCicloContratistaTransporteDto: UpdateZCicloContratistaTransporteDto,
  ) {
    return this.zCicloContratistaTransporteService.update(
      +id,
      updateZCicloContratistaTransporteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zCicloContratistaTransporteService.remove(+id);
  }
}
