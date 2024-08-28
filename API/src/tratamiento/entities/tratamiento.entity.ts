import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { Siembra } from '../../siembra/entities/siembra.entity';

@Entity()
export class Tratamiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Siembra, (siembra) => siembra.tratamiento)
  siembras: Siembra[];

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(name: string, description = '') {
    this.name = name;
    this.description = description;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setDescription(description: string) {
    this.description = description;
  }
}
