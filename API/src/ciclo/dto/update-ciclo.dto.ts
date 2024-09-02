import { PartialType } from '@nestjs/mapped-types';
import { CreateCicloDto } from './create-ciclo.dto';
import { IsArray, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateCicloDto extends PartialType(CreateCicloDto) {
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsArray()
  @IsOptional()
  impuestosId?: number[];
}
