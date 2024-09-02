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

  @Column({ default: null })
  startDate: Date;

  @Column({ default: null })
  endDate: Date;

  @Column()
  type: string;

  @Column()
  cost: number;

  @Column()
  contractorCost: number;

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

  public setContractorCost(contractorCost: number) {
    this.contractorCost = contractorCost;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setContratista(contratista: Contratista) {
    this.contratista = contratista;
  }

  public setCiclo(ciclo: Ciclo) {
    this.ciclo = ciclo;
  }
}
