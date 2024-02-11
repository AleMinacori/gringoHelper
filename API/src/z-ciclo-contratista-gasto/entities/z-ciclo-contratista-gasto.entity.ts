import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';
import { Gasto } from '../../gasto/entities/gasto.entity';

@Entity()
export class ZCicloContratistaGasto {
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

  @ManyToOne(() => Gasto, (gasto) => gasto.zCicloContratistaGastos)
  gasto: Gasto;

  constructor(
    cost: number,
    description: string,
    ciclo: Ciclo,
    contratista: Contratista,
    gasto: Gasto,
  ) {
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
    this.contratista = contratista;
    this.gasto = gasto;
  }
}
