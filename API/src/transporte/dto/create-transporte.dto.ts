import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateTransporteDto {
  @IsDate()
  startDate: Date;

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
