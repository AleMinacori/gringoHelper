import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Siembra } from '../../siembra/entities/siembra.entity';

@Entity()
export class Tratamiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Siembra, (siembra) => siembra.tratamiento)
  siembras: Siembra[];

  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
