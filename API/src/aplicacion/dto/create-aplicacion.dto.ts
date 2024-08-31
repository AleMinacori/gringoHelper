import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateAplicacionDto {
  @IsNumber()
  @IsPositive()
  productCost: number;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  productoId: number;
}
