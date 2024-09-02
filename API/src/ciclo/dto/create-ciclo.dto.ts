import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCicloDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
