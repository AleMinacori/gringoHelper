import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { Campo } from '../../campo/entities/campo.entity';
import { CicloLote } from '../../ciclo-lote/entities/ciclo-lote.entity';

@Entity()
export class Lote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  area: number;

  @OneToMany(() => CicloLote, (cicloLote) => cicloLote.lote)
  cicloLotes: CicloLote[];

  @ManyToOne(() => Campo, (campo: Campo) => campo.lotes)
  campo: Campo;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(name: string, area: number, campo: Campo) {
    this.name = name;
    this.area = area;
    this.campo = campo;
  }

  public getName() {
    return this.name;
  }

  public getArea() {
    return this.area;
  }

  public getCampo() {
    return this.campo;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setArea(area: number) {
    this.area = area;
  }

  public setCampo(campo: Campo) {
    this.campo = campo;
  }
}
