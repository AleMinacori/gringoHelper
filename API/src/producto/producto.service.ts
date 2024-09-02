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
    private productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const producto = new Producto(
      createProductoDto.name,
      createProductoDto.type,
      createProductoDto.description,
    );
    return await this.productoRepository.save(producto);
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id: number) {
    return await this.productoRepository.findOneBy({ id });
  }

  async findOneOrFail(id: number): Promise<Producto | null> {
    const producto = await this.productoRepository.findOneBy({ id });
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOneOrFail(id);
    if (updateProductoDto.name) {
      producto.setName(updateProductoDto.name);
    }
    if (updateProductoDto.type) {
      producto.setType(updateProductoDto.type);
    }
    if (updateProductoDto.description) {
      producto.setDescription(updateProductoDto.description);
    }
    return await this.productoRepository.save(producto);
  }

  async remove(id: number) {
    return await this.productoRepository.softDelete({ id });
  }
}
