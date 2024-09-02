import { PartialType } from '@nestjs/mapped-types';
import { CreateCicloDto } from './create-ciclo.dto';
import { IsArray } from 'class-validator';

export class AssignLoteCicloDto extends PartialType(CreateCicloDto) {
  @IsArray()
  lotesId: number[];
}
