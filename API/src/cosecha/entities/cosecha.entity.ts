import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { ZCicloContratistaCosecha } from '../../z-ciclo-contratista-cosecha/entities/z-ciclo-contratista-cosecha.entity';

@Entity()
export class Cosecha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  humidity: number;

  @Column()
  tons: number;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.cosechas)
  ciclo: Ciclo;

  @OneToMany(
    () => ZCicloContratistaCosecha,
    (zCicloContratistaCosecha) => zCicloContratistaCosecha.cosecha,
  )
  zCicloContratistaCosechas: ZCicloContratistaCosecha[];

  constructor(date: string, humidity: number, tons: number, ciclo: Ciclo) {
    this.date = date;
    this.humidity = humidity;
    this.tons = tons;
    this.ciclo = ciclo;
  }
}
