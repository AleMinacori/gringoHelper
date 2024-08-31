import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTratamientoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}
