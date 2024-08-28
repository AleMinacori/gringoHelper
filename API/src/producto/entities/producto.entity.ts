import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';

import { Aplicacion } from '../../aplicacion/entities/aplicacion.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToMany(() => Aplicacion, (aplicacion) => aplicacion.producto)
  aplicaciones: Aplicacion[];

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setType(type: string) {
    this.type = type;
  }
}
