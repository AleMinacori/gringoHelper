import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { Lote } from '../../lote/entities/lote.entity';

@Entity()
export class Campo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Lote, (lote: Lote) => lote.campo)
  lotes: Lote[];

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }
}
