import { PartialType } from '@nestjs/mapped-types';
import { CreateTransporteDto } from './create-transporte.dto';
import { IsDateString, IsOptional } from 'class-validator';

export class UpdateTransporteDto extends PartialType(CreateTransporteDto) {
  @IsDateString()
  @IsOptional()
  endDate?: string;
}
