import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateGastoDto {
  @IsDateString()
  startDate: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsPositive()
  cost: number;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  cicloId: number;
}
