import { IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateSiembraDto {
  @IsDateString()
  startDate: string;

  @IsNumber()
  @IsPositive()
  density: number;

  @IsNumber()
  @IsPositive()
  depth: number;

  @IsNumber()
  @IsPositive()
  seedCost: number;

  @IsNumber()
  @IsPositive()
  contractorCost: number;

  @IsNumber()
  @IsPositive()
  tratamientoId: number;

  @IsNumber()
  @IsPositive()
  granoId: number;

  @IsNumber()
  @IsPositive()
  contratistaId: number;

  @IsNumber()
  @IsPositive()
  cicloId: number;
}
