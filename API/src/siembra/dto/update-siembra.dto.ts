import { PartialType } from '@nestjs/mapped-types';
import { CreateSiembraDto } from './create-siembra.dto';
import { IsDateString, IsOptional } from 'class-validator';

export class UpdateSiembraDto extends PartialType(CreateSiembraDto) {
  @IsDateString()
  @IsOptional()
  endDate?: string;
}
