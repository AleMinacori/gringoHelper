import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';

import { Producto } from '../../producto/entities/producto.entity';
import { Fertilizacion } from '../../fertilizacion/entities/fertilizacion.entity';
import { Fumigacion } from '../../fumigacion/entities/fumigacion.entity';

@Entity()
export class Aplicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productCost: number;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @ManyToOne(() => Producto, (producto) => producto.aplicaciones)
  producto: Producto;

  @ManyToOne(() => Fertilizacion, (fertilizacion) => fertilizacion.aplicaciones)
  fertilizacion: Fertilizacion;

  @ManyToOne(() => Fumigacion, (fumigacion) => fumigacion.aplicaciones)
  fumigacion: Fumigacion;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(
    productCost: number,
    quantity: number,
    description: string,
    producto: Producto,
  ) {
    this.productCost = productCost;
    this.quantity = quantity;
    this.description = description;
    this.producto = producto;
  }

  public setProductCost(productCost: number) {
    this.productCost = productCost;
  }

  public setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setProducto(producto: Producto) {
    this.producto = producto;
  }

  public setFertilizacion(fertilizacion: Fertilizacion) {
    this.fertilizacion = fertilizacion;
  }

  public setFumigacion(fumigacion: Fumigacion) {
    this.fumigacion = fumigacion;
  }
}
