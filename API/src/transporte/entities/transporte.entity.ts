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
export class Transporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  startPoint: string;

  @Column()
  endPoint: string;

  @Column()
  description: string;

  @Column()
  contractorCost: number;

  @ManyToOne(() => Contratista, (contratista) => contratista.transportes)
  contratista: Contratista;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.transportes)
  ciclo: Ciclo;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    startDate: Date,
    startPoint: string,
    endPoint: string,
    description: string,
    contractorCost: number,
    contratista: Contratista,
    ciclo: Ciclo,
  ) {
    this.startDate = startDate;
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.description = description;
    this.contractorCost = contractorCost;
    this.contratista = contratista;
    this.ciclo = ciclo;
  }
}
