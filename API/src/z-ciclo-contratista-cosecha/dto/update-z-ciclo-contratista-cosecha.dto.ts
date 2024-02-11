import { PartialType } from '@nestjs/mapped-types';
import { CreateZCicloContratistaCosechaDto } from './create-z-ciclo-contratista-cosecha.dto';

export class UpdateZCicloContratistaCosechaDto extends PartialType(
  CreateZCicloContratistaCosechaDto,
) {}
