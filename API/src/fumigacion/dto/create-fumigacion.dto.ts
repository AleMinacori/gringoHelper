import { CreateAplicacionDto } from '../../aplicacion/dto/create-aplicacion.dto';
import { IsDate, IsNumber, IsPositive } from 'class-validator';

export class CreateFumigacionDto extends CreateAplicacionDto {
  @IsDate()
  startDate: Date;

  @IsNumber()
  @IsPositive()
  contractorCost: number;

  @IsNumber()
  @IsPositive()
  contratistaId: number;

  @IsNumber()
  @IsPositive()
  productoId: number;

  @IsNumber()
  @IsPositive()
  cicloId: number;
}
