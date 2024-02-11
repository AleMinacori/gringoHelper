import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Grano } from '../../grano/entities/grano.entity';
import { Tratamiento } from '../../tratamiento/entities/tratamiento.entity';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { ZCicloContratistaSiembra } from '../../z-ciclo-contratista-siembra/entities/z-ciclo-contratista-siembra.entity';

@Entity()
export class Siembra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  density: number;

  @Column()
  depth: number;

  @Column()
  costGrain: number;

  @ManyToOne(() => Grano, (grano) => grano.siembras)
  grano: Grano;

  @ManyToOne(() => Tratamiento, (tratamiento) => tratamiento.siembras)
  tratamiento: Tratamiento;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.siembras)
  ciclo: Ciclo;

  @OneToMany(
    () => ZCicloContratistaSiembra,
    (zCicloContratistaSiembra) => zCicloContratistaSiembra.siembra,
  )
  zCicloContratistaSiembras: ZCicloContratistaSiembra[];

  constructor(
    date: string,
    density: number,
    depth: number,
    costGrain: number,
    tratamiento: Tratamiento,
    grano: Grano,
    ciclo: Ciclo,
  ) {
    this.date = date;
    this.density = density;
    this.depth = depth;
    this.costGrain = costGrain;
    this.tratamiento = tratamiento;
    this.grano = grano;
    this.ciclo = ciclo;
  }
}
