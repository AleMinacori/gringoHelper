import { PartialType } from '@nestjs/mapped-types';
import { CreateGastoDto } from './create-gasto.dto';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class UpdateGastoDto extends PartialType(CreateGastoDto) {
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  contractorCost?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  contratistaId?: number;
}
