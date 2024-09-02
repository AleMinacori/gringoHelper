import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { Grano } from '../../grano/entities/grano.entity';
import { Tratamiento } from '../../tratamiento/entities/tratamiento.entity';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';

@Entity()
export class Siembra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  startDate: Date;

  @Column({ default: null })
  endDate: Date;

  @Column()
  density: number;

  @Column()
  depth: number;

  @Column()
  seedCost: number;

  @Column()
  contractorCost: number;

  @ManyToOne(() => Grano, (grano) => grano.siembras)
  grano: Grano;

  @ManyToOne(() => Tratamiento, (tratamiento) => tratamiento.siembras)
  tratamiento: Tratamiento;

  @ManyToOne(() => Contratista, (contratista) => contratista.siembras)
  contratista: Contratista;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.siembras)
  ciclo: Ciclo;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    startDate: Date,
    density: number,
    depth: number,
    seedCost: number,
    contractorCost: number,
    tratamiento: Tratamiento,
    grano: Grano,
    contratista: Contratista,
    ciclo: Ciclo,
  ) {
    this.startDate = startDate;
    this.density = density;
    this.depth = depth;
    this.seedCost = seedCost;
    this.contractorCost = contractorCost;
    this.tratamiento = tratamiento;
    this.grano = grano;
    this.contratista = contratista;
    this.ciclo = ciclo;
  }

  public setStartDate(startDate: Date) {
    this.startDate = startDate;
  }

  public setEndDate(endDate: Date) {
    this.endDate = endDate;
  }

  public setDensity(density: number) {
    this.density = density;
  }

  public setDepth(depth: number) {
    this.depth = depth;
  }

  public setSeedCost(seedCost: number) {
    this.seedCost = seedCost;
  }

  public setContractorCost(contractorCost: number) {
    this.contractorCost = contractorCost;
  }

  public setTratamiento(tratamiento: Tratamiento) {
    this.tratamiento = tratamiento;
  }

  public setGrano(grano: Grano) {
    this.grano = grano;
  }

  public setContratista(contratista: Contratista) {
    this.contratista = contratista;
  }

  public setCiclo(ciclo: Ciclo) {
    this.ciclo = ciclo;
  }
}
