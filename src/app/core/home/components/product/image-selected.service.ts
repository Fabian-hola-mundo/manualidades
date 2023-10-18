import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products';
import { GetFakeProductsService } from 'src/app/services/get-fake-products.service';

@Injectable({
  providedIn: 'root',
})
export class ImageSelectedService {
  selectedProduct!: Product;
  images: string[] = [];
  imageSelected!: number ;

  constructor(private product: GetFakeProductsService) {}

  getSelectedProduct() {
    this.selectedProduct = this.product.getProduct();
  }

  getImagesSelected() {
    this.getSelectedProduct();
    this.images = this.selectedProduct.images;
    return this.images;
  }

  getIndexImageSelected(indexImage: number) {
    this.imageSelected = indexImage
    return this.imageSelected
  }
}
