import { PartialType } from '@nestjs/mapped-types';
import { CreateFumigacionDto } from './create-fumigacion.dto';

export class UpdateFumigacionDto extends PartialType(CreateFumigacionDto) {}
