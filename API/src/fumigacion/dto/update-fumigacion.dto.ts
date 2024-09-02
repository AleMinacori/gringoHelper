import { PartialType } from '@nestjs/mapped-types';
import { CreateFumigacionDto } from './create-fumigacion.dto';
import { IsDateString, IsOptional } from 'class-validator';

export class UpdateFumigacionDto extends PartialType(CreateFumigacionDto) {
  @IsDateString()
  @IsOptional()
  endDate?: string;
}
