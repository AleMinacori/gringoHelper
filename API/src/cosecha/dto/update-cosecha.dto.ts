import { PartialType } from '@nestjs/mapped-types';
import { CreateCosechaDto } from './create-cosecha.dto';
import { IsDateString, IsOptional } from 'class-validator';

export class UpdateCosechaDto extends PartialType(CreateCosechaDto) {
  @IsDateString()
  @IsOptional()
  endDate?: string;
}
