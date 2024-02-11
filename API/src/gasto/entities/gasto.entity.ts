import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { ZCicloContratistaFumigacion } from '../../z-ciclo-contratista-fumigacion/entities/z-ciclo-contratista-fumigacion.entity';
import { ZCicloContratistaGasto } from '../../z-ciclo-contratista-gasto/entities/z-ciclo-contratista-gasto.entity';

@Entity()
export class Gasto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  type: string;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.gastos)
  ciclo: Ciclo;

  @OneToMany(
    () => ZCicloContratistaGasto,
    (zCicloContratistaGasto) => zCicloContratistaGasto.gasto,
  )
  zCicloContratistaGastos: ZCicloContratistaGasto[];

  constructor(
    date: string,
    type: string,
    cost: number,
    description: string,
    ciclo: Ciclo,
  ) {
    this.date = date;
    this.type = type;
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
  }
}
