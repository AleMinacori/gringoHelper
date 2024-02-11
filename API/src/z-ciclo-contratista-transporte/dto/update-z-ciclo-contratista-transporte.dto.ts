import { PartialType } from '@nestjs/mapped-types';
import { CreateZCicloContratistaTransporteDto } from './create-z-ciclo-contratista-transporte.dto';

export class UpdateZCicloContratistaTransporteDto extends PartialType(
  CreateZCicloContratistaTransporteDto,
) {}
