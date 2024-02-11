import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Siembra } from '../../siembra/entities/siembra.entity';

@Entity()
export class Grano {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  brand: string;

  @Column()
  variety: string;

  @OneToMany(() => Siembra, (siembra) => siembra.grano)
  siembras: Siembra[];

  constructor(type: string, brand: string, variety: string) {
    this.type = type;
    this.brand = brand;
    this.variety = variety;
  }

  public setType(type: string) {
    this.type = type;
  }

  public setBrand(brand: string) {
    this.brand = brand;
  }

  public setVariety(variety: string) {
    this.variety = variety;
  }
}
