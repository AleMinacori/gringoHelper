import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { YCicloLote } from '../../y-ciclo-lote/entities/y-ciclo-lote.entity';

@Entity()
export class Lote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  area: number;

  @OneToMany(() => YCicloLote, (yCicloLote) => yCicloLote.lote)
  ciclos: YCicloLote[];

  constructor(name: string, area: number) {
    this.name = name;
    this.area = area;
  }

  public getName() {
    return this.name;
  }

  public getArea() {
    return this.area;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setArea(area: number) {
    this.area = area;
  }
}
