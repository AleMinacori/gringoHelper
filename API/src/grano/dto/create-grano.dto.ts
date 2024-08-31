import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGranoDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  variety: string;
}
