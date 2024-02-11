import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZCicloContratistaFumigacionService } from './z-ciclo-contratista-fumigacion.service';
import { CreateZCicloContratistaFumigacionDto } from './dto/create-z-ciclo-contratista-fumigacion.dto';
import { UpdateZCicloContratistaFumigacionDto } from './dto/update-z-ciclo-contratista-fumigacion.dto';

@Controller('z-ciclo-contratista-fumigacion')
export class ZCicloContratistaFumigacionController {
  constructor(
    private readonly zCicloContratistaFumigacionService: ZCicloContratistaFumigacionService,
  ) {}

  @Post()
  create(
    @Body()
    createZCicloContratistaFumigacionDto: CreateZCicloContratistaFumigacionDto,
  ) {
    return this.zCicloContratistaFumigacionService.create(
      createZCicloContratistaFumigacionDto,
    );
  }

  @Get()
  findAll() {
    return this.zCicloContratistaFumigacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zCicloContratistaFumigacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateZCicloContratistaFumigacionDto: UpdateZCicloContratistaFumigacionDto,
  ) {
    return this.zCicloContratistaFumigacionService.update(
      +id,
      updateZCicloContratistaFumigacionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zCicloContratistaFumigacionService.remove(+id);
  }
}
