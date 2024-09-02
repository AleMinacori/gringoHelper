import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';

@Entity()
export class Seguro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  startDate: Date;

  @Column({ default: null })
  endDate: Date;

  @Column()
  type: string;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.seguros)
  ciclo: Ciclo;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    startDate: Date,
    endDate: Date,
    type: string,
    cost: number,
    description: string,
    ciclo: Ciclo,
  ) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
  }

  public setStartDate(startDate: Date) {
    this.startDate = startDate;
  }

  public setEndDate(endDate: Date) {
    this.endDate = endDate;
  }

  public setType(type: string) {
    this.type = type;
  }

  public setCost(cost: number) {
    this.cost = cost;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setCiclo(ciclo: Ciclo) {
    this.ciclo = ciclo;
  }
}
