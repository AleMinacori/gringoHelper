import { PartialType } from '@nestjs/mapped-types';
import { CreateZCicloContratistaFumigacionDto } from './create-z-ciclo-contratista-fumigacion.dto';

export class UpdateZCicloContratistaFumigacionDto extends PartialType(
  CreateZCicloContratistaFumigacionDto,
) {}
