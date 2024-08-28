import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';

@Entity()
export class Gasto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  type: string;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Contratista, (contratista) => contratista.gastos)
  contratista: Contratista;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.gastos)
  ciclo: Ciclo;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    startDate: Date,
    type: string,
    cost: number,
    description: string,
    ciclo: Ciclo,
  ) {
    this.startDate = startDate;
    this.type = type;
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
  }
}
