import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateTransporteDto {
  @IsDateString()
  startDate: string;

  @IsString()
  @IsNotEmpty()
  startPoint: string;

  @IsString()
  @IsNotEmpty()
  endPoint: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  contractorCost: number;

  @IsNumber()
  @IsPositive()
  contratistaId: number;

  @IsNumber()
  @IsPositive()
  cicloId: number;
}
