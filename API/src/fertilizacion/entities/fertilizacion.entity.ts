import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { ZCicloContratistaFertilizacion } from '../../z-ciclo-contratista-fertilizacion/entities/z-ciclo-contratista-fertilizacion.entity';

@Entity()
export class Fertilizacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  application: number;

  @Column()
  costProduct: number;

  @ManyToOne(() => Producto, (producto) => producto.fertilizaciones)
  producto: Producto;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.fertilizaciones)
  ciclo: Ciclo;

  @OneToMany(
    () => ZCicloContratistaFertilizacion,
    (zCicloContratistaFertilizacion) =>
      zCicloContratistaFertilizacion.fertilizacion,
  )
  zCicloContratistaFertilizaciones: ZCicloContratistaFertilizacion[];

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
