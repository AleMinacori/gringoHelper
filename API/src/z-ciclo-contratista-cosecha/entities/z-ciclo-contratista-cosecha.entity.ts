import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ciclo } from '../../ciclo/entities/ciclo.entity';
import { Contratista } from '../../contratista/entities/contratista.entity';
import { Cosecha } from '../../cosecha/entities/cosecha.entity';

@Entity()
export class ZCicloContratistaCosecha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column()
  description: string;

  @ManyToOne(() => Ciclo, (ciclo) => ciclo.zCicloContratistaCosechas)
  ciclo: Ciclo;

  @ManyToOne(
    () => Contratista,
    (contratista) => contratista.zCicloContratistaCosechas,
  )
  contratista: Contratista;

  @ManyToOne(() => Cosecha, (cosecha) => cosecha.zCicloContratistaCosechas)
  cosecha: Cosecha;

  constructor(
    cost: number,
    description: string,
    ciclo: Ciclo,
    contratista: Contratista,
    cosecha: Cosecha,
  ) {
    this.cost = cost;
    this.description = description;
    this.ciclo = ciclo;
    this.contratista = contratista;
    this.cosecha = cosecha;
  }
}
