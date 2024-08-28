import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { CicloImpuesto } from '../../ciclo-impuesto/entities/ciclo-impuesto.entity';

@Entity()
export class Impuesto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  description: string;

  @OneToMany(() => CicloImpuesto, (cicloImpuesto) => cicloImpuesto.impuesto)
  cicloImpuestos: CicloImpuesto[];

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(type: string, description: string) {
    this.type = type;
    this.description = description;
  }
}
