import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';
import { Transporte } from '../../transporte/entities/transporte.entity';

@Entity()
export class ZCicloContratistaTransporte {
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

  @ManyToOne(
    () => Transporte,
    (transporte) => transporte.zCicloContratistaTransportes,
  )
  transporte: Transporte;

  constructor(
    cost: number,
    description: string,
    ciclo: Ciclo,
    contratista: Contratista,
    transporte: Transporte,
  ) {
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
    this.contratista = contratista;
    this.transporte = transporte;
  }
}
