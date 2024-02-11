import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { ZCicloContratistaFumigacion } from '../../z-ciclo-contratista-fumigacion/entities/z-ciclo-contratista-fumigacion.entity';

@Entity()
export class Fumigacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  application: number;

  @Column()
  costProduct: number;

  @ManyToOne(() => Producto, (producto) => producto.fumigaciones)
  producto: Producto;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.fumigaciones)
  ciclo: Ciclo;

  @OneToMany(
    () => ZCicloContratistaFumigacion,
    (zCicloContratistaFumigacion) => zCicloContratistaFumigacion.fumigacion,
  )
  zCicloContratistaFumigaciones: ZCicloContratistaFumigacion[];

  constructor(
    date: string,
    application: number,
    costProduct: number,
    producto: Producto,
    ciclo: Ciclo,
  ) {
    this.date = date;
    this.application = application;
    this.costProduct = costProduct;
    this.producto = producto;
    this.ciclo = ciclo;
  }
}
