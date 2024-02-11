import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { ZCicloContratistaSiembra } from '../../z-ciclo-contratista-siembra/entities/z-ciclo-contratista-siembra.entity';
import { ZCicloContratistaTransporte } from '../../z-ciclo-contratista-transporte/entities/z-ciclo-contratista-transporte.entity';

@Entity()
export class Transporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  from: string;

  @Column()
  destination: string;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.transportes)
  ciclo: Ciclo;

  @OneToMany(
    () => ZCicloContratistaTransporte,
    (zCicloContratistaTransporte) => zCicloContratistaTransporte.transporte,
  )
  zCicloContratistaTransportes: ZCicloContratistaTransporte[];

  constructor(
    date: string,
    from: string,
    destination: string,
    description: string,
    ciclo: Ciclo,
  ) {
    this.date = date;
    this.from = from;
    this.destination = destination;
    this.description = description;
    this.ciclo = ciclo;
  }
}
