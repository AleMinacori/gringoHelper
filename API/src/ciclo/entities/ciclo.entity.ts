import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { Siembra } from '../../siembra/entities/siembra.entity';
import { Cosecha } from '../../cosecha/entities/cosecha.entity';
import { Fertilizacion } from '../../fertilizacion/entities/fertilizacion.entity';
import { Fumigacion } from '../../fumigacion/entities/fumigacion.entity';
import { Gasto } from '../../gasto/entities/gasto.entity';
import { Seguro } from '../../seguro/entities/seguro.entity';
import { Transporte } from '../../transporte/entities/transporte.entity';

import { CicloImpuesto } from '../../ciclo-impuesto/entities/ciclo-impuesto.entity';
import { CicloLote } from '../../ciclo-lote/entities/ciclo-lote.entity';

@Entity()
export class Ciclo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  state: string;

  @OneToMany(() => Siembra, (siembra) => siembra.ciclo)
  siembras: Siembra[];

  @OneToMany(() => Cosecha, (cosecha) => cosecha.ciclo)
  cosechas: Cosecha[];

  @OneToMany(() => Fertilizacion, (fertilizacion) => fertilizacion.ciclo)
  fertilizaciones: Fertilizacion[];

  @OneToMany(() => Fumigacion, (fumigacion) => fumigacion.ciclo)
  fumigaciones: Fumigacion[];

  @OneToMany(() => Gasto, (gasto) => gasto.ciclo)
  gastos: Gasto[];

  @OneToMany(() => CicloImpuesto, (cicloImpuesto) => cicloImpuesto.ciclo)
  cicloImpuestos: CicloImpuesto[];

  @OneToMany(() => CicloLote, (cicloLote) => cicloLote.ciclo)
  cicloLotes: CicloLote[];

  @OneToMany(() => Seguro, (seguro) => seguro.ciclo)
  seguros: Seguro[];

  @OneToMany(() => Transporte, (transporte) => transporte.ciclo)
  transportes: Transporte[];

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setStartDate(startDate: Date) {
    this.startDate = startDate;
  }

  public setEndDate(endDate: Date) {
    this.endDate = endDate;
  }

  public setState(state: string) {
    this.state = state;
  }
}
