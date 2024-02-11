import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Fertilizacion } from '../../fertilizacion/entities/fertilizacion.entity';
import { Fumigacion } from '../../fumigacion/entities/fumigacion.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Fertilizacion, (fertilizacion) => fertilizacion.producto)
  fertilizaciones: Fertilizacion[];

  @OneToMany(() => Fumigacion, (fumigacion) => fumigacion.producto)
  fumigaciones: Fumigacion[];

  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
