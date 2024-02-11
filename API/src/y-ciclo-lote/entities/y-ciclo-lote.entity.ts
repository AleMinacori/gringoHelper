import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Lote } from '../../lote/entities/lote.entity';

@Entity()
export class YCicloLote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.lotes)
  ciclo: Ciclo;

  @ManyToOne(() => Lote, (lote) => lote.ciclos)
  lote: Lote;

  constructor(ciclo: Ciclo, lote: Lote) {
    this.ciclo = ciclo;
    this.lote = lote;
  }

  public setDescription(description: string) {
    this.description = description;
  }
}
