import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SiembraService } from './siembra.service';
import { CreateSiembraDto } from './dto/create-siembra.dto';
import { UpdateSiembraDto } from './dto/update-siembra.dto';

@Controller('siembra')
export class SiembraController {
  constructor(private readonly siembraService: SiembraService) {}

  @Post()
  create(@Body() createSiembraDto: CreateSiembraDto) {
    return this.siembraService.create(createSiembraDto);
  }

  @Get()
  findAll() {
    return this.siembraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siembraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiembraDto: UpdateSiembraDto) {
    return this.siembraService.update(+id, updateSiembraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siembraService.remove(+id);
  }
}
