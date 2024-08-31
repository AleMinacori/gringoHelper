import { IsDate, IsNumber, IsPositive } from 'class-validator';

export class CreateSiembraDto {
  @IsDate()
  startDate: Date;

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
