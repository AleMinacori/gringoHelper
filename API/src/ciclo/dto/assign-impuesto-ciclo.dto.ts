import { PartialType } from '@nestjs/mapped-types';
import { CreateCicloDto } from './create-ciclo.dto';
import { IsArray } from 'class-validator';

export class AssignImpuestoCicloDto extends PartialType(CreateCicloDto) {
  @IsArray()
  impuestosId: number[];
}
