import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  Productos: Producto[] = [
    {
      nombre: 'Gran Hotel Manzana Kempinski',
      rating: 5,
      clasificacion: 'hotel',
      precio: 1500,
      ubicacion: 'Habana',
    },
    {
      nombre: 'Royalton Hicacos',
      rating: 5,
      clasificacion: 'hotel',
      precio: 1500,
      ubicacion: 'Matanzas',
    },
    {
      nombre: 'Iberostar Selection Holguín',
      rating: 5,
      clasificacion: 'hotel',
      precio: 1500,
      ubicacion: 'Holguin',
    },
    {
      nombre: 'Casa Colonial Gran Marques',
      rating: 5,
      clasificacion: 'casa',
      precio: 1500,
      ubicacion: 'Habana',
    },
    {
      nombre: 'Casa Costa Verde',
      rating: 5,
      clasificacion: 'casa',
      precio: 1500,
      ubicacion: 'Matanzas',
    },
    {
      nombre: 'Casas Gran Mirador',
      rating: 5,
      clasificacion: 'casa',
      precio: 1500,
      ubicacion: 'Jibacoa',
    },
  ];
  constructor() {}
  getAllProducts(): Producto[] {
    return this.Productos;
  }
  getallcasas() {
    return this.Productos.filter((prod) => prod.clasificacion === 'casa');
  }
  getallhoteles() {
    return this.Productos.filter((prod) => prod.clasificacion === 'hotel');
  }
}
