import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';

@Entity()
export class Impuesto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  type: string;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.impuestos)
  ciclo: Ciclo;

  constructor(
    date: string,
    type: string,
    cost: number,
    description: string,
    ciclo: Ciclo,
  ) {
    this.date = date;
    this.type = type;
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
  }
}
