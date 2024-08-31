import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateGastoDto {
  @IsDate()
  startDate: Date;

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
