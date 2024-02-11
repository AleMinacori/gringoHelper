import { PartialType } from '@nestjs/mapped-types';
import { CreateSiembraDto } from './create-siembra.dto';

export class UpdateSiembraDto extends PartialType(CreateSiembraDto) {}
