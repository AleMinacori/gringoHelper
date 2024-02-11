import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';
import { Fertilizacion } from '../../fertilizacion/entities/fertilizacion.entity';

@Entity()
export class ZCicloContratistaFertilizacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.zCicloContratistaFertilizaciones)
  ciclo: Ciclo;

  @ManyToOne(
    () => Contratista,
    (contratista) => contratista.zCicloContratistaFertilizaciones,
  )
  contratista: Contratista;

  @ManyToOne(
    () => Fertilizacion,
    (fertilizacion) => fertilizacion.zCicloContratistaFertilizaciones,
  )
  fertilizacion: Fertilizacion;

  constructor(
    cost: number,
    description: string,
    ciclo: Ciclo,
    contratista: Contratista,
    fertilizacion: Fertilizacion,
  ) {
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
    this.contratista = contratista;
    this.fertilizacion = fertilizacion;
  }
}
