import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Lote } from '../../lote/entities/lote.entity';
import { Siembra } from '../../siembra/entities/siembra.entity';
import { Cosecha } from '../../cosecha/entities/cosecha.entity';
import { Fertilizacion } from '../../fertilizacion/entities/fertilizacion.entity';
import { Fumigacion } from '../../fumigacion/entities/fumigacion.entity';
import { Gasto } from '../../gasto/entities/gasto.entity';
import { Impuesto } from '../../impuesto/entities/impuesto.entity';
import { Seguro } from '../../seguro/entities/seguro.entity';
import { Transporte } from '../../transporte/entities/transporte.entity';
import { ZCicloContratistaCosecha } from '../../z-ciclo-contratista-cosecha/entities/z-ciclo-contratista-cosecha.entity';
import { ZCicloContratistaFertilizacion } from '../../z-ciclo-contratista-fertilizacion/entities/z-ciclo-contratista-fertilizacion.entity';
import { ZCicloContratistaFumigacion } from '../../z-ciclo-contratista-fumigacion/entities/z-ciclo-contratista-fumigacion.entity';
import { ZCicloContratistaGasto } from '../../z-ciclo-contratista-gasto/entities/z-ciclo-contratista-gasto.entity';
import { ZCicloContratistaSiembra } from '../../z-ciclo-contratista-siembra/entities/z-ciclo-contratista-siembra.entity';
import { ZCicloContratistaTransporte } from '../../z-ciclo-contratista-transporte/entities/z-ciclo-contratista-transporte.entity';
import { YCicloLote } from '../../y-ciclo-lote/entities/y-ciclo-lote.entity';

@Entity()
export class Ciclo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  state: string;

  @OneToMany(() => YCicloLote, (yCicloLote) => yCicloLote.ciclo)
  lotes: YCicloLote[];

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

  @OneToMany(() => Impuesto, (impuesto) => impuesto.ciclo)
  impuestos: Impuesto[];

  @OneToMany(() => Seguro, (seguro) => seguro.ciclo)
  seguros: Seguro[];

  @OneToMany(() => Transporte, (transporte) => transporte.ciclo)
  transportes: Transporte[];

  @OneToMany(
    () => ZCicloContratistaCosecha,
    (zCicloContratistaCosecha) => zCicloContratistaCosecha.ciclo,
  )
  zCicloContratistaCosechas: ZCicloContratistaCosecha[];

  @OneToMany(
    () => ZCicloContratistaFertilizacion,
    (zCicloContratistaFertilizacion) => zCicloContratistaFertilizacion.ciclo,
  )
  zCicloContratistaFertilizaciones: ZCicloContratistaFertilizacion[];

  @OneToMany(
    () => ZCicloContratistaFumigacion,
    (zCicloContratistaFumigacion) => zCicloContratistaFumigacion.ciclo,
  )
  zCicloContratistaFumigaciones: ZCicloContratistaFumigacion[];

  @OneToMany(
    () => ZCicloContratistaGasto,
    (zCicloContratistaGasto) => zCicloContratistaGasto.ciclo,
  )
  zCicloContratistaGastos: ZCicloContratistaGasto[];

  @OneToMany(
    () => ZCicloContratistaSiembra,
    (zCicloContratistaSiembra) => zCicloContratistaSiembra.ciclo,
  )
  zCicloContratistaSiembras: ZCicloContratistaSiembra[];

  @OneToMany(
    () => ZCicloContratistaTransporte,
    (zCicloContratistaTransporte) => zCicloContratistaTransporte.ciclo,
  )
  zCicloContratistaTransportes: ZCicloContratistaTransporte[];

  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setStartDate(startDate: string) {
    this.startDate = startDate;
  }

  public setEndDate(endDate: string) {
    this.endDate = endDate;
  }

  public setState(state: string) {
    this.state = state;
  }
}
