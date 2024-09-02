import { PartialType } from '@nestjs/mapped-types';
import { CreateFertilizacionDto } from './create-fertilizacion.dto';
import { IsDateString, IsOptional } from 'class-validator';

export class UpdateFertilizacionDto extends PartialType(
  CreateFertilizacionDto,
) {
  @IsDateString()
  @IsOptional()
  endDate?: string;
}
