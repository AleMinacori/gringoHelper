import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateLoteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  area: number;

  @IsNumber()
  @IsPositive()
  campoId: number;
}
