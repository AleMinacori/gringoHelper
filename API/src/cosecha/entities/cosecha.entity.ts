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
export class Cosecha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  humidity: number;

  @Column()
  tons: number;

  @Column()
  contractorCost: number;

  @ManyToOne(() => Contratista, (contratista) => contratista.cosechas)
  contratista: Contratista;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.cosechas)
  ciclo: Ciclo;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    startDate: Date,
    humidity: number,
    tons: number,
    contractorCost: number,
    contratista: Contratista,
    ciclo: Ciclo,
  ) {
    this.startDate = startDate;
    this.humidity = humidity;
    this.tons = tons;
    this.contractorCost = contractorCost;
    this.contratista = contratista;
    this.ciclo = ciclo;
  }
}
