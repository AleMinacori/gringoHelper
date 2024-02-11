import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';
import { Siembra } from '../../siembra/entities/siembra.entity';

@Entity()
export class ZCicloContratistaSiembra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.zCicloContratistaFumigaciones)
  ciclo: Ciclo;

  @ManyToOne(
    () => Contratista,
    (contratista) => contratista.zCicloContratistaFumigaciones,
  )
  contratista: Contratista;

  @ManyToOne(() => Siembra, (siembra) => siembra.zCicloContratistaSiembras)
  siembra: Siembra;

  constructor(
    cost: number,
    description: string,
    ciclo: Ciclo,
    contratista: Contratista,
    siembra: Siembra,
  ) {
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
    this.contratista = contratista;
    this.siembra = siembra;
  }
}
