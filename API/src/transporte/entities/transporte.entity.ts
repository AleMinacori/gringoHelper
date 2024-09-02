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

  @Column({ default: null })
  startDate: Date;

  @Column({ default: null })
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

  public setStartDate(startDate: Date) {
    this.startDate = startDate;
  }

  public setEndDate(endDate: Date) {
    this.endDate = endDate;
  }

  public setStartPoint(startPoint: string) {
    this.startPoint = startPoint;
  }

  public setEndPoint(endPoint: string) {
    this.endPoint = endPoint;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setContractorCost(contractorCost: number) {
    this.contractorCost = contractorCost;
  }

  public setContratista(contratista: Contratista) {
    this.contratista = contratista;
  }

  public setCiclo(ciclo: Ciclo) {
    this.ciclo = ciclo;
  }
}
