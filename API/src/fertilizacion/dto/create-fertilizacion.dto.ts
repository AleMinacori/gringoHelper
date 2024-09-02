import { CreateAplicacionDto } from '../../aplicacion/dto/create-aplicacion.dto';
import { IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateFertilizacionDto extends CreateAplicacionDto {
  @IsDateString()
  startDate: string;

  @IsNumber()
  @IsPositive()
  contractorCost: number;

  @IsNumber()
  @IsPositive()
  contratistaId: number;

  @IsNumber()
  @IsPositive()
  cicloId: number;
}
