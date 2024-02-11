import { PartialType } from '@nestjs/mapped-types';
import { CreateFertilizacionDto } from './create-fertilizacion.dto';

export class UpdateFertilizacionDto extends PartialType(
  CreateFertilizacionDto,
) {}
