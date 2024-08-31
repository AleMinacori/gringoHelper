import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSeguroDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

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
