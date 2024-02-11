import { PartialType } from '@nestjs/mapped-types';
import { CreateZCicloContratistaSiembraDto } from './create-z-ciclo-contratista-siembra.dto';

export class UpdateZCicloContratistaSiembraDto extends PartialType(
  CreateZCicloContratistaSiembraDto,
) {}
