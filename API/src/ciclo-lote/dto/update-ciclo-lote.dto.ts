import { PartialType } from '@nestjs/mapped-types';
import { CreateCicloLoteDto } from './create-ciclo-lote.dto';

export class UpdateCicloLoteDto extends PartialType(CreateCicloLoteDto) {}
