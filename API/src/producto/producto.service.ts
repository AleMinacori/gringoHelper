import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  create(createProductoDto: CreateProductoDto) {
    return 'This action adds a new producto';
  }

  async findAll() {
    const productos = await this.productosRepository.find();
    return productos;
  }

  async findOne(id: number) {
    const producto = await this.productosRepository.findOneBy({ id });
    return producto;
  }

  async findOneOrFail(id: number): Promise<Producto | null> {
    const producto = await this.productosRepository.findOneBy({ id });
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrada`);
    }
    return producto;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
