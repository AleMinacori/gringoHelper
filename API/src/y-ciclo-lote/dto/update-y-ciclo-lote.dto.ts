import { PartialType } from '@nestjs/mapped-types';
import { CreateYCicloLoteDto } from './create-y-ciclo-lote.dto';

export class UpdateYCicloLoteDto extends PartialType(CreateYCicloLoteDto) {}
