import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAplicacionDto } from './dto/create-aplicacion.dto';
import { UpdateAplicacionDto } from './dto/update-aplicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aplicacion } from './entities/aplicacion.entity';
import { Repository } from 'typeorm';
import { ProductoService } from '../producto/producto.service';
import { Fertilizacion } from '../fertilizacion/entities/fertilizacion.entity';
import { Fumigacion } from '../fumigacion/entities/fumigacion.entity';

@Injectable()
export class AplicacionService {
  constructor(
    @InjectRepository(Aplicacion)
    private readonly aplicacionRepository: Repository<Aplicacion>,
    private readonly productoService: ProductoService,
  ) {}

  async create(createAplicacionDto: CreateAplicacionDto) {
    const producto = await this.productoService.findOneOrFail(
      createAplicacionDto.productoId,
    );
    const aplicacion = new Aplicacion(
      createAplicacionDto.productCost,
      createAplicacionDto.quantity,
      createAplicacionDto.description,
      producto,
    );
    return await this.aplicacionRepository.save(aplicacion);
  }

  async createFertilizacion(
    createAplicacionDto: CreateAplicacionDto,
    fertilizacion: Fertilizacion,
  ) {
    const aplicacion = await this.create(createAplicacionDto);
    aplicacion.setFertilizacion(fertilizacion);
    return await this.aplicacionRepository.save(aplicacion);
  }

  async createFumigacion(
    createAplicacionDto: CreateAplicacionDto,
    fumigacion: Fumigacion,
  ) {
    const aplicacion = await this.create(createAplicacionDto);
    aplicacion.setFumigacion(fumigacion);
    return await this.aplicacionRepository.save(aplicacion);
  }

  async findAll() {
    return await this.aplicacionRepository.find();
  }

  async findOne(id: number) {
    return await this.aplicacionRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Aplicacion | null> {
    const aplicacion = await this.aplicacionRepository.findOneBy({
      id,
    });
    if (!aplicacion) {
      throw new NotFoundException(`aplicacion con id ${id} no encontrada`);
    }
    return aplicacion;
  }

  async update(id: number, updateAplicacionDto: UpdateAplicacionDto) {
    const aplicacion = await this.findOneOrFail(id);
    if (updateAplicacionDto.productCost) {
      aplicacion.setProductCost(updateAplicacionDto.productCost);
    }
    if (updateAplicacionDto.quantity) {
      aplicacion.setQuantity(updateAplicacionDto.quantity);
    }
    if (updateAplicacionDto.description) {
      aplicacion.setDescription(updateAplicacionDto.description);
    }
    return await this.aplicacionRepository.save(aplicacion);
  }

  async remove(id: number) {
    return await this.aplicacionRepository.softDelete({ id });
  }
}
