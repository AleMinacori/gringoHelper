import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContratistaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  cbu: string;

  @IsString()
  @IsNotEmpty()
  alias: string;
}
