import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';
import { Fumigacion } from '../../fumigacion/entities/fumigacion.entity';

@Entity()
export class ZCicloContratistaFumigacion {
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
    () => Fumigacion,
    (fumigacion) => fumigacion.zCicloContratistaFumigaciones,
  )
  fumigacion: Fumigacion;

  constructor(
    cost: number,
    description: string,
    ciclo: Ciclo,
    contratista: Contratista,
    fumigacion: Fumigacion,
  ) {
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
    this.contratista = contratista;
    this.fumigacion = fumigacion;
  }
}
