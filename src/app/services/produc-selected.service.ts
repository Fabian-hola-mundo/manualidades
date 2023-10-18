import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProducSelectedService {
  public product!: Product;

  establecerDatos(datos: Product | any) {
    this.product = datos;
  }

  obtenerDatos() {
    return this.product;
  }
}
