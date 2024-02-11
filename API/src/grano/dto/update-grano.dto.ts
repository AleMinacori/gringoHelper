import { PartialType } from '@nestjs/mapped-types';
import { CreateGranoDto } from './create-grano.dto';

export class UpdateGranoDto extends PartialType(CreateGranoDto) {}
