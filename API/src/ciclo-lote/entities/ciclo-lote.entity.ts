import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Lote } from '../../lote/entities/lote.entity';

@Entity()
export class CicloLote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.cicloLotes)
  ciclo: Ciclo;

  @ManyToOne(() => Lote, (lote) => lote.cicloLotes)
  lote: Lote;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(ciclo: Ciclo, lote: Lote) {
    this.ciclo = ciclo;
    this.lote = lote;
  }
}
