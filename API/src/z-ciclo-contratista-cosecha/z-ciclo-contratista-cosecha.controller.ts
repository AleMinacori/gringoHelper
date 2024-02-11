import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZCicloContratistaCosechaService } from './z-ciclo-contratista-cosecha.service';
import { CreateZCicloContratistaCosechaDto } from './dto/create-z-ciclo-contratista-cosecha.dto';
import { UpdateZCicloContratistaCosechaDto } from './dto/update-z-ciclo-contratista-cosecha.dto';

@Controller('z-ciclo-contratista-cosecha')
export class ZCicloContratistaCosechaController {
  constructor(
    private readonly zCicloContratistaCosechaService: ZCicloContratistaCosechaService,
  ) {}

  @Post()
  create(
    @Body()
    createZCicloContratistaCosechaDto: CreateZCicloContratistaCosechaDto,
  ) {
    return this.zCicloContratistaCosechaService.create(
      createZCicloContratistaCosechaDto,
    );
  }

  @Get()
  findAll() {
    return this.zCicloContratistaCosechaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zCicloContratistaCosechaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateZCicloContratistaCosechaDto: UpdateZCicloContratistaCosechaDto,
  ) {
    return this.zCicloContratistaCosechaService.update(
      +id,
      updateZCicloContratistaCosechaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zCicloContratistaCosechaService.remove(+id);
  }
}
