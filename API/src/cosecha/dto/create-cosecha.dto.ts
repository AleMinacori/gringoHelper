import { IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateCosechaDto {
  @IsDateString()
  startDate: string;

  @IsNumber()
  @IsPositive()
  humidity: number;

  @IsNumber()
  @IsPositive()
  tons: number;

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
