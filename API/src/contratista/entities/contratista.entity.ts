import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { Siembra } from '../../siembra/entities/siembra.entity';
import { Cosecha } from '../../cosecha/entities/cosecha.entity';
import { Gasto } from '../../gasto/entities/gasto.entity';
import { Transporte } from '../../transporte/entities/transporte.entity';
import { Fertilizacion } from '../../fertilizacion/entities/fertilizacion.entity';
import { Fumigacion } from '../../fumigacion/entities/fumigacion.entity';

@Entity()
export class Contratista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  cbu: string;

  @Column()
  alias: string;

  @OneToMany(() => Siembra, (siembra) => siembra.contratista)
  siembras: Siembra[];

  @OneToMany(() => Cosecha, (cosecha) => cosecha.contratista)
  cosechas: Cosecha[];

  @OneToMany(() => Gasto, (gasto) => gasto.contratista)
  gastos: Gasto[];

  @OneToMany(() => Transporte, (transporte) => transporte.contratista)
  transportes: Transporte[];

  @OneToMany(() => Fertilizacion, (fertilizacion) => fertilizacion.contratista)
  fertilizaciones: Fertilizacion[];

  @OneToMany(() => Fumigacion, (fumigacion) => fumigacion.contratista)
  fumigaciones: Fumigacion[];

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(name: string, lastname: string, cbu: string, alias: string) {
    this.name = name;
    this.lastname = lastname;
    this.cbu = cbu;
    this.alias = alias;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setLastname(lastname: string) {
    this.lastname = lastname;
  }

  public setCbu(cbu: string) {
    this.cbu = cbu;
  }

  public setAlias(alias: string) {
    this.alias = alias;
  }
}
