import { PartialType } from '@nestjs/mapped-types';
import { CreateCicloImpuestoDto } from './create-ciclo-impuesto.dto';

export class UpdateCicloImpuestoDto extends PartialType(CreateCicloImpuestoDto) {}
