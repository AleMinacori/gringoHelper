import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCampoDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
