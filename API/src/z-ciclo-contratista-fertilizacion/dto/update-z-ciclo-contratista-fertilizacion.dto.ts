import { PartialType } from '@nestjs/mapped-types';
import { CreateZCicloContratistaFertilizacionDto } from './create-z-ciclo-contratista-fertilizacion.dto';

export class UpdateZCicloContratistaFertilizacionDto extends PartialType(
  CreateZCicloContratistaFertilizacionDto,
) {}
