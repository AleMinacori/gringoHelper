import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZCicloContratistaGastoService } from './z-ciclo-contratista-gasto.service';
import { CreateZCicloContratistaGastoDto } from './dto/create-z-ciclo-contratista-gasto.dto';
import { UpdateZCicloContratistaGastoDto } from './dto/update-z-ciclo-contratista-gasto.dto';

@Controller('z-ciclo-contratista-gasto')
export class ZCicloContratistaGastoController {
  constructor(
    private readonly zCicloContratistaGastoService: ZCicloContratistaGastoService,
  ) {}

  @Post()
  create(
    @Body() createZCicloContratistaGastoDto: CreateZCicloContratistaGastoDto,
  ) {
    return this.zCicloContratistaGastoService.create(
      createZCicloContratistaGastoDto,
    );
  }

  @Get()
  findAll() {
    return this.zCicloContratistaGastoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zCicloContratistaGastoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateZCicloContratistaGastoDto: UpdateZCicloContratistaGastoDto,
  ) {
    return this.zCicloContratistaGastoService.update(
      +id,
      updateZCicloContratistaGastoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zCicloContratistaGastoService.remove(+id);
  }
}
