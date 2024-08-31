import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImpuestoDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
