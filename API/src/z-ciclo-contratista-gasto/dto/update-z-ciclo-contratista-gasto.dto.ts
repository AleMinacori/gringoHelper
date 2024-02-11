import { PartialType } from '@nestjs/mapped-types';
import { CreateZCicloContratistaGastoDto } from './create-z-ciclo-contratista-gasto.dto';

export class UpdateZCicloContratistaGastoDto extends PartialType(
  CreateZCicloContratistaGastoDto,
) {}
