import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ZCicloContratistaCosecha } from '../../z-ciclo-contratista-cosecha/entities/z-ciclo-contratista-cosecha.entity';
import { ZCicloContratistaFertilizacion } from '../../z-ciclo-contratista-fertilizacion/entities/z-ciclo-contratista-fertilizacion.entity';
import { ZCicloContratistaFumigacion } from '../../z-ciclo-contratista-fumigacion/entities/z-ciclo-contratista-fumigacion.entity';
import { ZCicloContratistaGasto } from '../../z-ciclo-contratista-gasto/entities/z-ciclo-contratista-gasto.entity';
import { ZCicloContratistaSiembra } from '../../z-ciclo-contratista-siembra/entities/z-ciclo-contratista-siembra.entity';
import { ZCicloContratistaTransporte } from '../../z-ciclo-contratista-transporte/entities/z-ciclo-contratista-transporte.entity';

@Entity()
export class Contratista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  cbu: string;

  @OneToMany(
    () => ZCicloContratistaCosecha,
    (zCicloContratistaCosecha) => zCicloContratistaCosecha.contratista,
  )
  zCicloContratistaCosechas: ZCicloContratistaCosecha[];

  @OneToMany(
    () => ZCicloContratistaFertilizacion,
    (zCicloContratistaFertilizacion) =>
      zCicloContratistaFertilizacion.contratista,
  )
  zCicloContratistaFertilizaciones: ZCicloContratistaFertilizacion[];

  @OneToMany(
    () => ZCicloContratistaFumigacion,
    (zCicloContratistaFumigacion) => zCicloContratistaFumigacion.contratista,
  )
  zCicloContratistaFumigaciones: ZCicloContratistaFumigacion[];

  @OneToMany(
    () => ZCicloContratistaGasto,
    (zCicloContratistaGasto) => zCicloContratistaGasto.contratista,
  )
  zCicloContratistaGastos: ZCicloContratistaGasto[];

  @OneToMany(
    () => ZCicloContratistaSiembra,
    (zCicloContratistaSiembra) => zCicloContratistaSiembra.contratista,
  )
  zCicloContratistaSiembras: ZCicloContratistaSiembra[];

  @OneToMany(
    () => ZCicloContratistaTransporte,
    (zCicloContratistaTransporte) => zCicloContratistaTransporte.contratista,
  )
  zCicloContratistaTransportes: ZCicloContratistaTransporte[];

  constructor(name: string, lastname: string, cbu: string) {
    this.name = name;
    this.lastname = lastname;
    this.cbu = cbu;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setLastname(lastname: string) {
    this.lastname = lastname;
  }

  public setCbu(cbu: string) {
    this.cbu = cbu;
  }
}
