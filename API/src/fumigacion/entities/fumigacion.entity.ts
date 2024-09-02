import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';
import { Aplicacion } from '../../aplicacion/entities/aplicacion.entity';

@Entity()
export class Fumigacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  startDate: Date;

  @Column({ default: null })
  endDate: Date;

  @Column()
  contractorCost: number;

  @OneToMany(() => Aplicacion, (aplicacion) => aplicacion.fumigacion)
  aplicaciones: Aplicacion[];

  @ManyToOne(() => Contratista, (contratista) => contratista.fumigaciones)
  contratista: Contratista;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.fumigaciones)
  ciclo: Ciclo;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    startDate: Date,
    contractorCost: number,
    contratista: Contratista,
    ciclo: Ciclo,
  ) {
    this.startDate = startDate;
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
