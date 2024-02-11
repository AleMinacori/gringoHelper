import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZCicloContratistaSiembraService } from './z-ciclo-contratista-siembra.service';
import { CreateZCicloContratistaSiembraDto } from './dto/create-z-ciclo-contratista-siembra.dto';
import { UpdateZCicloContratistaSiembraDto } from './dto/update-z-ciclo-contratista-siembra.dto';

@Controller('z-ciclo-contratista-siembra')
export class ZCicloContratistaSiembraController {
  constructor(
    private readonly zCicloContratistaSiembraService: ZCicloContratistaSiembraService,
  ) {}

  @Post()
  create(
    @Body()
    createZCicloContratistaSiembraDto: CreateZCicloContratistaSiembraDto,
  ) {
    return this.zCicloContratistaSiembraService.create(
      createZCicloContratistaSiembraDto,
    );
  }

  @Get()
  findAll() {
    return this.zCicloContratistaSiembraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zCicloContratistaSiembraService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateZCicloContratistaSiembraDto: UpdateZCicloContratistaSiembraDto,
  ) {
    return this.zCicloContratistaSiembraService.update(
      +id,
      updateZCicloContratistaSiembraDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zCicloContratistaSiembraService.remove(+id);
  }
}
