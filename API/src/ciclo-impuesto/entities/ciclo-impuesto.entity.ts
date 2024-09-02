import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Impuesto } from '../../impuesto/entities/impuesto.entity';

@Entity()
export class CicloImpuesto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  startDate: Date;

  @Column({ default: null })
  endDate: Date;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.cicloImpuestos)
  ciclo: Ciclo;

  @ManyToOne(() => Impuesto, (impuesto) => impuesto.cicloImpuestos)
  impuesto: Impuesto;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(ciclo: Ciclo, impuesto: Impuesto) {
    this.ciclo = ciclo;
    this.impuesto = impuesto;
  }

  public setStartDate(startDate: Date) {
    this.startDate = startDate;
  }

  public setEndDate(endDate: Date) {
    this.endDate = endDate;
  }

  public setCost(cost: number) {
    this.cost = cost;
  }

  public setDescription(description: string) {
    this.description = description;
  }
}
